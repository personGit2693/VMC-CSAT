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


if(isset($_POST["token"]) && isset($_POST["external_clientTypeId"]) && isset($_POST["office_id"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$office_id = $_POST["office_id"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$external_clientTypeId = $_POST["external_clientTypeId"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$respondentCcRates_Resp = new stdClass();
	$respondentCcRates_Resp->validAccess = true;
	$respondentCcRates_Resp->serverConnection = $dbConnection->serverConnection;
	$respondentCcRates_Resp->validToken = null;
	$respondentCcRates_Resp->execution = null;	
	$respondentCcRates_Resp->respondentCcRatingDetails_Array = array();	

	$validToken = null;
	$execution = null;		
	$respondentCcRatingDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($respondentCcRates_Resp, JSON_NUMERIC_CHECK);

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
		$respondentCcRates_Resp->validToken = $validToken;

		echo json_encode($respondentCcRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$respondentCcRates_Resp->validToken = $validToken;

		echo json_encode($respondentCcRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		/*Get Respondent Cc Rating Details*/
		/*_Prep query*/
		$respondentCcRates_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			ccquestionsrates_tab.ccquestion_id AS 'ccquestion_id',
			ccquestionsrates_tab.ccquestionsrate_rate AS 'ccquestionsrate_rate' 
			FROM clientresponses_tab 
			INNER JOIN ccresponses_tab 
			ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
			INNER JOIN ccquestionsrates_tab 
			ON ccresponses_tab.ccquestionsrate_id = ccquestionsrates_tab.ccquestionsrate_id 			
			WHERE clientresponses_tab.clienttype_id = :external_clientTypeId 			
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
		";

		if($office_id != 0){
			$respondentCcRates_Query .= " AND clientresponses_tab.office_id = :office_id";
		}

		$respondentCcRates_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC"; 							
		/*_Prep query*/

		/*_Execute query*/
		$respondentCcRates_QueryObj = $dbConnection->selectedPdoConn->prepare($respondentCcRates_Query);		

		$respondentCcRates_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$respondentCcRates_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		
		$respondentCcRates_QueryObj->bindValue(':external_clientTypeId', intval($external_clientTypeId), PDO::PARAM_INT);

		if($office_id != 0){
			$respondentCcRates_QueryObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $respondentCcRates_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($respondentCcRatingDetails_Assoc = $respondentCcRates_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$respondentCcRatingDetails_Array[] = $respondentCcRatingDetails_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Respondent Cc Rating Details*/		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$respondentCcRates_Resp->execution = $execution;	
	$respondentCcRates_Resp->respondentCcRatingDetails_Array = $respondentCcRatingDetails_Array;

	echo json_encode($respondentCcRates_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["external_clientTypeId"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$respondentCcRates_Resp = new stdClass();
	$respondentCcRates_Resp->validAccess = false;
	$respondentCcRates_Resp->serverConnection = null;
	$respondentCcRates_Resp->validToken = null;
	$respondentCcRates_Resp->execution = null;	
	$respondentCcRates_Resp->respondentCcRatingDetails_Array = null;

	echo json_encode($respondentCcRates_Resp, JSON_NUMERIC_CHECK);
}
?>