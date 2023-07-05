<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeId"]) && isset($_POST["officeId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeId = $_POST["clientTypeId"];
	$officeId = $_POST["officeId"];
	/*Query string*/


	/*Prep response*/
	$getCommentQuestions_Resp = new stdClass();
	$getCommentQuestions_Resp->execution = null;
	$getCommentQuestions_Resp->globalTokenResult = null;
	$getCommentQuestions_Resp->commentQuestionDetails_Array = array();
	$getCommentQuestions_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$commentQuestionDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getCommentQuestions_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getCommentQuestions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCommentQuestions_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getCommentQuestions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCommentQuestions_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get comment questions on db*/
		/*_ _Prep query*/
		$getCommentQuestions_Query = "SELECT questions_tab.question_id AS 'question_id',
			questions_tab.question_number AS 'question_number',
			questions_tab.question_value AS 'question_value',
			questions_tab.dimension_id AS 'dimension_id',
			questions_tab.questionsgroup_id AS 'questionsgroup_id',
			questions_tab.question_active AS 'question_active', 
			IfNull(questionsgroups_tab.questionsgroup_value, '') AS 'questionsgroup_value'
			FROM offices_tab 
			INNER JOIN officestag_tab 
			ON offices_tab.office_id = officestag_tab.office_id
			INNER JOIN forms_tab 
			ON officestag_tab.form_id = forms_tab.form_id 
			INNER JOIN questionstag_tab 
			ON forms_tab.form_id = questionstag_tab.form_id 
			INNER JOIN questions_tab 
			ON questionstag_tab.question_id = questions_tab.question_id 
			LEFT JOIN questionsgroups_tab 
			ON questions_tab.questionsgroup_id = questionsgroups_tab.questionsgroup_id
			WHERE offices_tab.office_id = :officeId 
			AND forms_tab.clienttype_id = :clientTypeId 
			AND questions_tab.dimension_id = 10
			ORDER BY questions_tab.question_number;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getCommentQuestions_QueryObj = $vmcCsat_Conn->prepare($getCommentQuestions_Query);
		$getCommentQuestions_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getCommentQuestions_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getCommentQuestions_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($commentQuestion_Assoc = $getCommentQuestions_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$commentQuestionDetails_Array[] = $commentQuestion_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get comment questions on db*/
		

		/*_Return response*/
		$getCommentQuestions_Resp->execution = $execution;
		$getCommentQuestions_Resp->globalTokenResult = $globalTokenResult;
		$getCommentQuestions_Resp->commentQuestionDetails_Array = $commentQuestionDetails_Array;

		echo json_encode($getCommentQuestions_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["officeId"])){
	$getCommentQuestions_Resp = new stdClass();
	$getCommentQuestions_Resp->execution = null;
	$getCommentQuestions_Resp->globalTokenResult = null;
	$getCommentQuestions_Resp->commentQuestionDetails_Array = array();

	echo json_encode($getCommentQuestions_Resp);
}
?>