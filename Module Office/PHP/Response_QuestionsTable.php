<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
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
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getQuestionsScore_Resp = new stdClass();
	$getQuestionsScore_Resp->execution = null;
	$getQuestionsScore_Resp->globalTokenResult = null;
	$getQuestionsScore_Resp->questionsScores_Array = array();
	$getQuestionsScore_Resp->serverConnection = $serverConnection;

	$execution = null;
	$globalTokenResult = null;
	$questionsScores_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getQuestionsScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getQuestionsScore_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestionsScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getQuestionsScore_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestionsScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Questions scores*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$getQuestionsScores_Query = "SELECT officeQuestions_tab.question_id AS 'questionId', 
				officeQuestions_tab.question_value AS 'questionValue',
				officeQuestions_tab.question_number AS 'questionNo',
				IFNULL(totalStronglyAgreeResp_tab.totalStronglyAgree, 0) AS 'totalStronglyAgree',
				IFNULL(totalAgreeResp_tab.totalAgree, 0) AS 'totalAgree',
				IFNULL(totalNeitherResp_tab.totalNeither, 0) AS 'totalNeither',
				IFNULL(totalDisagreeResp_tab.totalDisagree, 0) AS 'totalDisagree',
				IFNULL(totalStronglyDisagreeResp_tab.totalStronglyDisagree, 0) AS 'totalStronglyDisagree',
				IFNULL(totalNoRatingResp_tab.totalNoRating, 0) AS 'totalNoRating'
				FROM (SELECT DISTINCT questionstag_tab.question_id AS 'question_id',
				      	questions_tab.question_value AS 'question_value',
				      	questions_tab.question_number AS 'question_number'
						FROM offices_tab 
						INNER JOIN officestag_tab 
						ON offices_tab.office_id = officestag_tab.office_id 
						INNER JOIN forms_tab 
						ON officestag_tab.form_id = forms_tab.form_id 
						INNER JOIN questionstag_tab 
						ON forms_tab.form_id = questionstag_tab.form_id 
						INNER JOIN questions_tab 
						ON questionstag_tab.question_id = questions_tab.question_id 
						WHERE offices_tab.office_id = :officeId
						AND NOT questions_tab.dimension_id = 10
						AND(forms_tab.clienttype_id = :clientTypeInternal OR forms_tab.clienttype_id = :clientTypeExternal)      	
				    ) AS officeQuestions_tab 
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalStronglyAgree' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 1 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalStronglyAgreeResp_tab
				ON officeQuestions_tab.question_id = totalStronglyAgreeResp_tab.question_id
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalAgree' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 2 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalAgreeResp_tab
				ON officeQuestions_tab.question_id = totalAgreeResp_tab.question_id
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalNeither' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 3 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalNeitherResp_tab
				ON officeQuestions_tab.question_id = totalNeitherResp_tab.question_id
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalDisagree' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 4 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalDisagreeResp_tab
				ON officeQuestions_tab.question_id = totalDisagreeResp_tab.question_id
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalStronglyDisagree' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 5 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalStronglyDisagreeResp_tab
				ON officeQuestions_tab.question_id = totalStronglyDisagreeResp_tab.question_id
				LEFT JOIN (SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
				            questionresponses_tab.question_id AS 'question_id',
				            COUNT(questionresponses_tab.questionresponse_id) AS 'totalNoRating' 
				            FROM clientresponses_tab 
				            INNER JOIN questionresponses_tab 
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE questionresponses_tab.score_id = 6 
				           	AND clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				            GROUP BY questionresponses_tab.question_id
				          ) AS totalNoRatingResp_tab
				ON officeQuestions_tab.question_id = totalNoRatingResp_tab.question_id
				ORDER BY officeQuestions_tab.question_number;			
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getQuestionsScores_QueryObj = $vmcCsat_Conn->prepare($getQuestionsScores_Query);
			$getQuestionsScores_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getQuestionsScores_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getQuestionsScores_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getQuestionsScores_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getQuestionsScores_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$execution = $getQuestionsScores_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($questionsScores_Assoc = $getQuestionsScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$questionsScores_Array[] = $questionsScores_Assoc;
				}
			}
			/*_Fetching*/
		}
		/*Get Questions scores*/
		

		/*_Return response*/
		$getQuestionsScore_Resp->execution = $execution;
		$getQuestionsScore_Resp->globalTokenResult = $globalTokenResult;
		$getQuestionsScore_Resp->questionsScores_Array = $questionsScores_Array;

		echo json_encode($getQuestionsScore_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	$getQuestionsScore_Resp = new stdClass();
	$getQuestionsScore_Resp->execution = null;
	$getQuestionsScore_Resp->globalTokenResult = null;
	$getQuestionsScore_Resp->questionsScores_Array = array();

	echo json_encode($getQuestionsScore_Resp, JSON_NUMERIC_CHECK);
}
?>