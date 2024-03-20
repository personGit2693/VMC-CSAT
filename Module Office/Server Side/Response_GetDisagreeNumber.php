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


if(isset($_POST["token"]) && isset($_POST["disagree_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$disagree_Id = $_POST["disagree_Id"];

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
	$getDisagreeNumber_Resp = new stdClass();
	$getDisagreeNumber_Resp->validAccess = true;
	$getDisagreeNumber_Resp->serverConnection = $dbConnection->serverConnection;
	$getDisagreeNumber_Resp->validToken = null;
	$getDisagreeNumber_Resp->execution = null;	
	$getDisagreeNumber_Resp->disagreeNumberDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$disagreeNumberDetails_Array = array();
	$disagreeNumberDetails_Array[] = array("Dates", "Disagree");
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getDisagreeNumber_Resp, JSON_NUMERIC_CHECK);

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
		$getDisagreeNumber_Resp->validToken = $validToken;

		echo json_encode($getDisagreeNumber_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getDisagreeNumber_Resp->validToken = $validToken;

		echo json_encode($getDisagreeNumber_Resp, JSON_NUMERIC_CHECK);

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

				$disagreeNumberDetails_Array[] = array(date("Y-m-d", $dateStart), 0);

				$dateStart = strtotime("+1 days", $dateStart);
			}
			/*Create dates*/
			

			/*Get Disagree Number*/
			/*_Prep query*/
			$getDisagreeNumber_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Disagree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
				AND questionresponses_tab.score_id = :disagree_Id 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getDisagreeNumber_QueryObj = $dbConnection->selectedPdoConn->prepare($getDisagreeNumber_Query);
			$getDisagreeNumber_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getDisagreeNumber_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getDisagreeNumber_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getDisagreeNumber_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getDisagreeNumber_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$getDisagreeNumber_QueryObj->bindValue(':disagree_Id', intval($disagree_Id), PDO::PARAM_INT);
			$execution = $getDisagreeNumber_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){		

				while($disagreeNumber_Assoc = $getDisagreeNumber_QueryObj->fetch(PDO::FETCH_ASSOC)){
					
					for($index=0; $index < count($disagreeNumberDetails_Array); $index++){

						if($disagreeNumberDetails_Array[$index][0] == $disagreeNumber_Assoc["Dates"]){

							$disagreeNumberDetails_Array[$index][1] = $disagreeNumber_Assoc["Disagree"];
						}
					}
				}
			}
			/*_Fetching*/
			/*Get Disagree Number*/	
		}
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getDisagreeNumber_Resp->execution = $execution;
	$getDisagreeNumber_Resp->disagreeNumberDetails_Array = $disagreeNumberDetails_Array;

	echo json_encode($getDisagreeNumber_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["disagree_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getDisagreeNumber_Resp = new stdClass();
	$getDisagreeNumber_Resp->validAccess = false;
	$getDisagreeNumber_Resp->serverConnection = null;
	$getDisagreeNumber_Resp->validToken = null;
	$getDisagreeNumber_Resp->execution = null;	
	$getDisagreeNumber_Resp->disagreeNumberDetails_Array = null;

	echo json_encode($getDisagreeNumber_Resp, JSON_NUMERIC_CHECK);
}
?>