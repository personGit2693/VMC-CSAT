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


if(isset($_POST["token"]) && isset($_POST["external_clientTypeId"]) && isset($_POST["questionActive"]) && isset($_POST["office_id"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$office_id = $_POST["office_id"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$external_clientTypeId = $_POST["external_clientTypeId"];
	$questionActive = $_POST["questionActive"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$respondentQuestionRates_Resp = new stdClass();
	$respondentQuestionRates_Resp->validAccess = true;
	$respondentQuestionRates_Resp->serverConnection = $dbConnection->serverConnection;
	$respondentQuestionRates_Resp->validToken = null;
	$respondentQuestionRates_Resp->execution = null;	
	$respondentQuestionRates_Resp->respondentQuestionRateDetails_Array = array();	

	$validToken = null;
	$execution = null;		
	$respondentQuestionRateDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($respondentQuestionRates_Resp, JSON_NUMERIC_CHECK);

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
		$respondentQuestionRates_Resp->validToken = $validToken;

		echo json_encode($respondentQuestionRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$respondentQuestionRates_Resp->validToken = $validToken;

		echo json_encode($respondentQuestionRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Respondent Question Rate Details*/
		/*_Prep query*/
		$getQuestionsDataTwo_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			questions_tab.question_number AS 'question_number',
			scores_tab.score_value AS 'score_value'
			FROM clientresponses_tab 
			INNER JOIN questionresponses_tab 
			ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference 
			INNER JOIN questions_tab 
			ON questionresponses_tab.question_id = questions_tab.question_id 
			INNER JOIN scores_tab 
			ON questionresponses_tab.score_id = scores_tab.score_id 			
			WHERE clientresponses_tab.clienttype_id = :external_clientTypeId 			
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)	
			AND questions_tab.question_active = :questionActive 
		";

		if($office_id != 0){
			$getQuestionsDataTwo_Query .= " AND clientresponses_tab.office_id = :office_id";
		}

		$getQuestionsDataTwo_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC, questions_tab.question_number ASC"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getQuestionsDataTwo_QueryObj = $dbConnection->selectedPdoConn->prepare($getQuestionsDataTwo_Query);		

		$getQuestionsDataTwo_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$getQuestionsDataTwo_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		
		$getQuestionsDataTwo_QueryObj->bindValue(':external_clientTypeId', intval($external_clientTypeId), PDO::PARAM_INT);
		$getQuestionsDataTwo_QueryObj->bindValue(':questionActive', intval($questionActive), PDO::PARAM_INT);

		if($office_id != 0){
			$getQuestionsDataTwo_QueryObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $getQuestionsDataTwo_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($respondentQuestionRateDetails_Assoc = $getQuestionsDataTwo_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$respondentQuestionRateDetails_Array[] = $respondentQuestionRateDetails_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Respondent Question Rate Details*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$respondentQuestionRates_Resp->execution = $execution;
	$respondentQuestionRates_Resp->respondentQuestionRateDetails_Array = $respondentQuestionRateDetails_Array;

	echo json_encode($respondentQuestionRates_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["external_clientTypeId"]) || !isset($_POST["questionActive"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$respondentQuestionRates_Resp = new stdClass();
	$respondentQuestionRates_Resp->validAccess = false;
	$respondentQuestionRates_Resp->serverConnection = null;
	$respondentQuestionRates_Resp->validToken = null;
	$respondentQuestionRates_Resp->execution = null;	
	$respondentQuestionRates_Resp->respondentQuestionRateDetails_Array = null;

	echo json_encode($respondentQuestionRates_Resp, JSON_NUMERIC_CHECK);
}
?>