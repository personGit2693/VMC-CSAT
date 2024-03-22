<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["internal_clientTypeId"]) && isset($_POST["questionActive"]) && isset($_POST["office_id"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$office_id = $_POST["office_id"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$internal_clientTypeId = $_POST["internal_clientTypeId"];
	$questionActive = $_POST["questionActive"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$csmRespondentsScores_Resp = new stdClass();
	$csmRespondentsScores_Resp->validAccess = true;
	$csmRespondentsScores_Resp->serverConnection = $dbConnection->serverConnection;
	$csmRespondentsScores_Resp->validToken = null;
	$csmRespondentsScores_Resp->execution = null;	
	$csmRespondentsScores_Resp->csmRespondentsScores_Array = array();	

	$validToken = null;
	$execution = null;		
	$csmRespondentsScores_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($csmRespondentsScores_Resp, JSON_NUMERIC_CHECK);

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
		$csmRespondentsScores_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$csmRespondentsScores_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get CSM Respondents Scores*/
		/*_Prep query*/
		$csmRespondentsScores_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			questions_tab.question_number AS 'question_number',
			scores_tab.score_value AS 'score_value'
			FROM clientresponses_tab 
			INNER JOIN questionresponses_tab 
			ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference 
			INNER JOIN questions_tab 
			ON questionresponses_tab.question_id = questions_tab.question_id 
			INNER JOIN scores_tab 
			ON questionresponses_tab.score_id = scores_tab.score_id 			
			WHERE clientresponses_tab.clienttype_id = :internal_clientTypeId 			
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)	
			AND questions_tab.question_active = :questionActive 
		";

		if($office_id != 0){
			$csmRespondentsScores_Query .= " AND clientresponses_tab.office_id = :office_id";
		}

		$csmRespondentsScores_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC, questions_tab.question_number ASC"; 							
		/*_Prep query*/

		/*_Execute query*/
		$csmRespondentsScores_QueryObj = $dbConnection->selectedPdoConn->prepare($csmRespondentsScores_Query);		

		$csmRespondentsScores_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$csmRespondentsScores_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		
		$csmRespondentsScores_QueryObj->bindValue(':internal_clientTypeId', intval($internal_clientTypeId), PDO::PARAM_INT);
		$csmRespondentsScores_QueryObj->bindValue(':questionActive', intval($questionActive), PDO::PARAM_INT);

		if($office_id != 0){
			$csmRespondentsScores_QueryObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $csmRespondentsScores_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($csmRespondentScores_Assoc = $csmRespondentsScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$csmRespondentsScores_Array[] = $csmRespondentScores_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get CSM Respondents Scores*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$csmRespondentsScores_Resp->execution = $execution;
	$csmRespondentsScores_Resp->csmRespondentsScores_Array = $csmRespondentsScores_Array;

	echo json_encode($csmRespondentsScores_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["internal_clientTypeId"]) || !isset($_POST["questionActive"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$csmRespondentsScores_Resp = new stdClass();
	$csmRespondentsScores_Resp->validAccess = false;
	$csmRespondentsScores_Resp->serverConnection = null;
	$csmRespondentsScores_Resp->validToken = null;
	$csmRespondentsScores_Resp->execution = null;	
	$csmRespondentsScores_Resp->csmRespondentsScores_Array = null;

	echo json_encode($csmRespondentsScores_Resp, JSON_NUMERIC_CHECK);
}
?>