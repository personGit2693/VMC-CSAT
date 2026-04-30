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


if(isset($_POST["token"]) && isset($_POST["dimensionComment_Id"]) && isset($_POST["neither_Id"])  && isset($_POST["stronglyDisagree_Id"]) && isset($_POST["disagree_Id"]) && isset($_POST["noRating_Id"]) && isset($_POST["agree_Id"]) && isset($_POST["stronglyAgree_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
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
	$agree_Id = $_POST["agree_Id"];
	$noRating_Id = $_POST["noRating_Id"];
	$neither_Id = $_POST["neither_Id"];
	$disagree_Id = $_POST["disagree_Id"];
	$stronglyDisagree_Id = $_POST["stronglyDisagree_Id"];
	$dimensionComment_Id = $_POST["dimensionComment_Id"];
	/*Query string*/


	/*Prep variables*/
	$csatDbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$questionsScoreDetails_Resp = new stdClass();
	$questionsScoreDetails_Resp->validAccess = true;
	$questionsScoreDetails_Resp->serverConnection = $csatDbConnection->serverConnection;
	$questionsScoreDetails_Resp->selectedPdoConn = ($csatDbConnection->selectedPdoConn !== null) ? true : null;
	$questionsScoreDetails_Resp->validToken = null;
	$questionsScoreDetails_Resp->execution = null;	
	$questionsScoreDetails_Resp->questionsScoresDetails_Array = array();

	$validToken = null;
	$execution = null;	
	$questionsScoresDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($csatDbConnection->serverConnection != null){

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK));
	}else if($csatDbConnection->selectedPdoConn == null){

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK));
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($csatDbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$questionsScoreDetails_Resp->validToken = $validToken;

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK));

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$questionsScoreDetails_Resp->validToken = $validToken;

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK));
	}
	/*Validate token*/


	if($validToken === null){		
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Get Questions scores details*/
			/*_Prep query*/
			$questionsScoreDetails_Query = "SELECT officeQuestions_tab.question_id AS 'questionId',
				officeQuestions_tab.question_value AS 'questionValue',
				officeQuestions_tab.question_number AS 'questionNo',
				IFNULL(scoresResp_tab.totalStronglyAgree, 0) AS 'totalStronglyAgree',
				IFNULL(scoresResp_tab.totalAgree, 0) AS 'totalAgree',
				IFNULL(scoresResp_tab.totalNeither, 0) AS 'totalNeither',
				IFNULL(scoresResp_tab.totalDisagree, 0) AS 'totalDisagree',
				IFNULL(scoresResp_tab.totalStronglyDisagree, 0) AS 'totalStronglyDisagree',
				IFNULL(scoresResp_tab.totalNoRating, 0) AS 'totalNoRating'
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
						AND NOT questions_tab.dimension_id = :dimensionComment_Id
						AND (forms_tab.clienttype_id = :clientTypeInternal OR forms_tab.clienttype_id = :clientTypeExternal)
				    ) AS officeQuestions_tab
				LEFT JOIN (SELECT questionresponses_tab.question_id AS 'question_id',
				            SUM(questionresponses_tab.score_id = :stronglyAgree_Id) AS totalStronglyAgree,
				            SUM(questionresponses_tab.score_id = :agree_Id) AS totalAgree,
				            SUM(questionresponses_tab.score_id = :neither_Id) AS totalNeither,
				            SUM(questionresponses_tab.score_id = :disagree_Id) AS totalDisagree,
				            SUM(questionresponses_tab.score_id = :stronglyDisagree_Id) AS totalStronglyDisagree,
				            SUM(questionresponses_tab.score_id = :noRating_Id) AS totalNoRating
				            FROM clientresponses_tab
				            INNER JOIN questionresponses_tab
				            ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference
				            WHERE clientresponses_tab.office_id = :officeId
				            AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				            AND clientresponses_tab.clientresponse_date >= :dateFrom
				            AND clientresponses_tab.clientresponse_date < DATE_ADD(:dateTo, INTERVAL 1 DAY)
				            GROUP BY questionresponses_tab.question_id
				          ) AS scoresResp_tab
				ON officeQuestions_tab.question_id = scoresResp_tab.question_id
				ORDER BY officeQuestions_tab.question_number;
			";							
			/*_Prep query*/

			/*_Execute query*/
			$questionsScoreDetails_QueryObj = $csatDbConnection->selectedPdoConn->prepare($questionsScoreDetails_Query);
			$questionsScoreDetails_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$questionsScoreDetails_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$questionsScoreDetails_QueryObj->bindValue(':stronglyAgree_Id', intval($stronglyAgree_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':agree_Id', intval($agree_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':neither_Id', intval($neither_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':disagree_Id', intval($disagree_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':stronglyDisagree_Id', intval($stronglyDisagree_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':noRating_Id', intval($noRating_Id), PDO::PARAM_INT);
			$questionsScoreDetails_QueryObj->bindValue(':dimensionComment_Id', intval($dimensionComment_Id), PDO::PARAM_INT);
			$execution = $questionsScoreDetails_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){	

				while($questionsScoreDetails_Assoc = $questionsScoreDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){
					
					$questionsScoresDetails_Array[] = $questionsScoreDetails_Assoc;
				}
			}
			/*_Fetching*/
			/*Get Questions scores details*/
		}
	}


	/*Disconnect*/
	$csatDbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$questionsScoreDetails_Resp->execution = $execution;
	$questionsScoreDetails_Resp->questionsScoresDetails_Array = $questionsScoresDetails_Array;

	echo json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["dimensionComment_Id"]) || !isset($_POST["neither_Id"]) || !isset($_POST["stronglyDisagree_Id"]) || !isset($_POST["disagree_Id"]) || !isset($_POST["noRating_Id"]) || !isset($_POST["agree_Id"]) || !isset($_POST["stronglyAgree_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$questionsScoreDetails_Resp = new stdClass();
	$questionsScoreDetails_Resp->validAccess = false;
	$questionsScoreDetails_Resp->serverConnection = null;
	$questionsScoreDetails_Resp->validToken = null;
	$questionsScoreDetails_Resp->execution = null;	
	$questionsScoreDetails_Resp->questionsScoresDetails_Array = null;

	echo json_encode($questionsScoreDetails_Resp, JSON_NUMERIC_CHECK);
}
?>