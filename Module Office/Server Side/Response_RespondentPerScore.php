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


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getRespondentPerScoreDetails_Resp = new stdClass();
	$getRespondentPerScoreDetails_Resp->validAccess = true;
	$getRespondentPerScoreDetails_Resp->serverConnection = $dbConnection->serverConnection;
	$getRespondentPerScoreDetails_Resp->validToken = null;
	$getRespondentPerScoreDetails_Resp->execution = null;	
	$getRespondentPerScoreDetails_Resp->respondentPerScoreDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$respondentPerScoreDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getRespondentPerScoreDetails_Resp, JSON_NUMERIC_CHECK);

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
		$getRespondentPerScoreDetails_Resp->validToken = $validToken;

		echo json_encode($getRespondentPerScoreDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getRespondentPerScoreDetails_Resp->validToken = $validToken;

		echo json_encode($getRespondentPerScoreDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
				
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Count Respondent per score*/
			/*_Prep query*/
			$getRespondentPerScoreDetails_Query = "SELECT scores_tab.score_id AS 'scoreId', 
				scores_tab.score_name AS 'rating', 
				COUNT(questionresponses_tab.questionresponse_id) AS 'responses'
				FROM scores_tab 
				LEFT JOIN questionresponses_tab 
				ON scores_tab.score_id = questionresponses_tab.score_id 
				LEFT JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				GROUP BY scores_tab.score_name
				ORDER BY scores_tab.score_id;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getRespondentPerScoreDetails_QueryObj = $dbConnection->selectedPdoConn->prepare($getRespondentPerScoreDetails_Query);
			$getRespondentPerScoreDetails_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getRespondentPerScoreDetails_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getRespondentPerScoreDetails_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getRespondentPerScoreDetails_QueryObj->bindValue(':dateFrom', ($dateFrom), PDO::PARAM_STR);
			$getRespondentPerScoreDetails_QueryObj->bindValue(':dateTo', ($dateTo), PDO::PARAM_STR);
			$execution = $getRespondentPerScoreDetails_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){

				while($countedServRate_Assoc = $getRespondentPerScoreDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
					$respondentPerScoreDetails_Array[] = $countedServRate_Assoc;
				}
			}
			/*_Fetching*/
			/*Count Respondent per score*/
		}		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getRespondentPerScoreDetails_Resp->execution = $execution;
	$getRespondentPerScoreDetails_Resp->respondentPerScoreDetails_Array = $respondentPerScoreDetails_Array;

	echo json_encode($getRespondentPerScoreDetails_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getRespondentPerScoreDetails_Resp = new stdClass();
	$getRespondentPerScoreDetails_Resp->validAccess = false;
	$getRespondentPerScoreDetails_Resp->serverConnection = null;
	$getRespondentPerScoreDetails_Resp->validToken = null;
	$getRespondentPerScoreDetails_Resp->execution = null;	
	$getRespondentPerScoreDetails_Resp->respondentPerScoreDetails_Array = null;

	echo json_encode($getRespondentPerScoreDetails_Resp, JSON_NUMERIC_CHECK);
}
?>