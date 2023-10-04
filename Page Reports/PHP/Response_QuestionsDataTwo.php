<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	/*Query string*/


	/*Prep response*/
	$getQuestionsDataTwo_Resp = new stdClass();
	$getQuestionsDataTwo_Resp->execution = null;
	$getQuestionsDataTwo_Resp->globalTokenResult = null;
	$getQuestionsDataTwo_Resp->questionsDataTwo_Array = array();
	$getQuestionsDataTwo_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$questionsDataTwo_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getQuestionsDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getQuestionsDataTwo_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestionsDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getQuestionsDataTwo_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestionsDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get CC for Data Two*/
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
			INNER JOIN officestag_tab 
			ON clientresponses_tab.office_id = officestag_tab.office_id
			WHERE clientresponses_tab.clienttype_id = 2 
			AND officestag_tab.form_id = 12 
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)			 	
		";

		if($officeId != 0){
			$getQuestionsDataTwo_Query .= " AND clientresponses_tab.office_id = :officeId";
		}

		$getQuestionsDataTwo_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC, questions_tab.question_number ASC"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getQuestionsDataTwo_QueryObj = $vmcCsat_Conn->prepare($getQuestionsDataTwo_Query);		

		$getQuestionsDataTwo_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$getQuestionsDataTwo_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		

		if($officeId != 0){
			$getQuestionsDataTwo_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		}

		$execution = $getQuestionsDataTwo_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			while($questionDataTwo_Assoc = $getQuestionsDataTwo_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$questionsDataTwo_Array[] = $questionDataTwo_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get CC for Data Two*/
		

		/*_Return response*/
		$getQuestionsDataTwo_Resp->execution = $execution;
		$getQuestionsDataTwo_Resp->globalTokenResult = $globalTokenResult;
		$getQuestionsDataTwo_Resp->questionsDataTwo_Array = $questionsDataTwo_Array;

		echo json_encode($getQuestionsDataTwo_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	$getQuestionsDataTwo_Resp = new stdClass();
	$getQuestionsDataTwo_Resp->execution = "";
	$getQuestionsDataTwo_Resp->globalTokenResult = "";
	$getQuestionsDataTwo_Resp->questionsDataTwo_Array = "";

	echo json_encode($getQuestionsDataTwo_Resp, JSON_NUMERIC_CHECK);
}
?>