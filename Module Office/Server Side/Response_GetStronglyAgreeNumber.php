<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["stronglyAgree_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$stronglyAgree_Id = $_POST["stronglyAgree_Id"];

	$dateStart = strtotime($_POST["dateFrom"]);
	$dateEnd = strtotime($_POST["dateTo"]);
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getStronglyAgreeNumber_Resp = new stdClass();
	$getStronglyAgreeNumber_Resp->validAccess = true;
	$getStronglyAgreeNumber_Resp->serverConnection = $dbConnection->serverConnection;
	$getStronglyAgreeNumber_Resp->validToken = null;
	$getStronglyAgreeNumber_Resp->execution = null;	
	$getStronglyAgreeNumber_Resp->stronglyAgreeNumberDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$stronglyAgreeNumberDetails_Array = array();
	$stronglyAgreeNumberDetails_Array[] = array("Dates", "Strongly Agree");
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getStronglyAgreeNumber_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$getStronglyAgreeNumber_Resp->validToken = $validToken;

		echo json_encode($getStronglyAgreeNumber_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getStronglyAgreeNumber_Resp->validToken = $validToken;

		echo json_encode($getStronglyAgreeNumber_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){

			/*Create dates*/			
			while($dateStart <= $dateEnd){

				$stronglyAgreeNumberDetails_Array[] = array(date("Y-m-d", $dateStart), 0);

				$dateStart = strtotime("+1 days", $dateStart);
			}
			/*Create dates*/

			/*Get Strongly Agree number*/
			/*_Prep query*/
			$getStronglyAgreeNumber_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Strongly Agree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
				AND questionresponses_tab.score_id = :stronglyAgree_Id 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getStronglyAgreeNumber_QueryObj = $dbConnection->selectedPdoConn->prepare($getStronglyAgreeNumber_Query);
			$getStronglyAgreeNumber_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getStronglyAgreeNumber_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getStronglyAgreeNumber_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getStronglyAgreeNumber_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getStronglyAgreeNumber_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$getStronglyAgreeNumber_QueryObj->bindValue(':stronglyAgree_Id', intval($stronglyAgree_Id), PDO::PARAM_INT);
			$execution = $getStronglyAgreeNumber_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){		

				while($stronglyAgreeNumber_Assoc = $getStronglyAgreeNumber_QueryObj->fetch(PDO::FETCH_ASSOC)){

					for($index=0; $index < count($stronglyAgreeNumberDetails_Array); $index++){

						if($stronglyAgreeNumberDetails_Array[$index][0] == $stronglyAgreeNumber_Assoc["Dates"]){

							$stronglyAgreeNumberDetails_Array[$index][1] = $stronglyAgreeNumber_Assoc["Strongly Agree"];
						}
					}
				}
			}
			/*_Fetching*/
			/*Get Strongly Agree number*/
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getStronglyAgreeNumber_Resp->execution = $execution;
	$getStronglyAgreeNumber_Resp->stronglyAgreeNumberDetails_Array = $stronglyAgreeNumberDetails_Array;

	echo json_encode($getStronglyAgreeNumber_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["stronglyAgree_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getStronglyAgreeNumber_Resp = new stdClass();
	$getStronglyAgreeNumber_Resp->validAccess = false;
	$getStronglyAgreeNumber_Resp->serverConnection = null;
	$getStronglyAgreeNumber_Resp->validToken = null;
	$getStronglyAgreeNumber_Resp->execution = null;	
	$getStronglyAgreeNumber_Resp->stronglyAgreeNumberDetails_Array = null;

	echo json_encode($getStronglyAgreeNumber_Resp, JSON_NUMERIC_CHECK);
}
?>