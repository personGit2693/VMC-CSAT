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


if(isset($_POST["token"]) && isset($_POST["noRating_Id"]) &&  isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$noRating_Id = $_POST["noRating_Id"];

	$dateStart = strtotime($_POST["dateFrom"]);
	$dateEnd = strtotime($_POST["dateTo"]);
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
	
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getNoRatingNumber_Resp = new stdClass();
	$getNoRatingNumber_Resp->validAccess = true;
	$getNoRatingNumber_Resp->serverConnection = $dbConnection->serverConnection;
	$getNoRatingNumber_Resp->validToken = null;
	$getNoRatingNumber_Resp->execution = null;	
	$getNoRatingNumber_Resp->noRatingNumberDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$noRatingNumberDetails_Array = array();
	$noRatingNumberDetails_Array[] = array("Dates", "No Rating");
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getNoRatingNumber_Resp, JSON_NUMERIC_CHECK);

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
		$getNoRatingNumber_Resp->validToken = $validToken;

		echo json_encode($getNoRatingNumber_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getNoRatingNumber_Resp->validToken = $validToken;

		echo json_encode($getNoRatingNumber_Resp, JSON_NUMERIC_CHECK);

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

				$noRatingNumberDetails_Array[] = array(date("Y-m-d", $dateStart), 0);

				$dateStart = strtotime("+1 days", $dateStart);
			}
			/*Create dates*/
			
			/*Get No Rating Number*/
			/*_Prep query*/
			$getNoRatingNumber_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'No Rating' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
				AND questionresponses_tab.score_id = :noRating_Id 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getNoRatingNumber_QueryObj = $dbConnection->selectedPdoConn->prepare($getNoRatingNumber_Query);
			$getNoRatingNumber_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getNoRatingNumber_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getNoRatingNumber_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getNoRatingNumber_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getNoRatingNumber_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$getNoRatingNumber_QueryObj->bindValue(':noRating_Id', intval($noRating_Id), PDO::PARAM_INT);
			$execution = $getNoRatingNumber_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				

				while($noRatingNumber_Assoc = $getNoRatingNumber_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
					for($index=0; $index < count($noRatingNumberDetails_Array); $index++){

						if($noRatingNumberDetails_Array[$index][0] == $noRatingNumber_Assoc["Dates"]){

							$noRatingNumberDetails_Array[$index][1] = $noRatingNumber_Assoc["No Rating"];
						}
					}
				}
			}
			/*_Fetching*/
			/*Get No Rating Number*/
		}		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getNoRatingNumber_Resp->execution = $execution;
	$getNoRatingNumber_Resp->noRatingNumberDetails_Array = $noRatingNumberDetails_Array;

	echo json_encode($getNoRatingNumber_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

	
}else if(!isset($_POST["token"]) || !isset($_POST["noRating_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getNoRatingNumber_Resp = new stdClass();
	$getNoRatingNumber_Resp->validAccess = false;
	$getNoRatingNumber_Resp->serverConnection = null;
	$getNoRatingNumber_Resp->validToken = null;
	$getNoRatingNumber_Resp->execution = null;	
	$getNoRatingNumber_Resp->noRatingNumberDetails_Array = null;

	echo json_encode($getNoRatingNumber_Resp, JSON_NUMERIC_CHECK);
}
?>