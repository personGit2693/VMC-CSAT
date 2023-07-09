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
	$getQuestions_Resp = new stdClass();
	$getQuestions_Resp->execution = null;
	$getQuestions_Resp->globalTokenResult = null;
	$getQuestions_Resp->questionDetails_Array = array();
	$getQuestions_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$questionDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getQuestions_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getQuestions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestions_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getQuestions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getQuestions_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get questions on db*/
		/*_ _Prep query*/
		$getQuestions_Query = "SELECT questions_tab.question_id AS 'question_id',
			questions_tab.question_number AS 'question_number',
			questions_tab.question_value AS 'question_value',
			questions_tab.dimension_id AS 'dimension_id',
			questions_tab.questionsgroup_id AS 'questionsgroup_id',
			questions_tab.question_active AS 'question_active', 
			IfNull(questionsgroups_tab.questionsgroup_value, '') AS 'questionsgroup_value',
			IfNull(questionsgroups_tab.questionsgroup_desc, '') AS 'questionsgroup_desc'
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
			AND NOT questions_tab.dimension_id = 10 
			AND questions_tab.question_active = 1 
			ORDER BY questions_tab.question_number;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getQuestions_QueryObj = $vmcCsat_Conn->prepare($getQuestions_Query);
		$getQuestions_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getQuestions_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getQuestions_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($question_Assoc = $getQuestions_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$questionDetails_Array[] = $question_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get questions on db*/
		

		/*_Return response*/
		$getQuestions_Resp->execution = $execution;
		$getQuestions_Resp->globalTokenResult = $globalTokenResult;
		$getQuestions_Resp->questionDetails_Array = $questionDetails_Array;

		echo json_encode($getQuestions_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["officeId"])){
	$getQuestions_Resp = new stdClass();
	$getQuestions_Resp->execution = null;
	$getQuestions_Resp->globalTokenResult = null;
	$getQuestions_Resp->questionDetails_Array = array();

	echo json_encode($getQuestions_Resp);
}
?>