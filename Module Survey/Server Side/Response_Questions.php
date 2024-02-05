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


if(isset($_POST["token"]) && isset($_POST["clientTypeId"]) && isset($_POST["officeId"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeId = $_POST["clientTypeId"];
	$officeId = $_POST["officeId"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getQuestions_Resp = new stdClass();
	$getQuestions_Resp->validAccess = true;
	$getQuestions_Resp->serverConnection = $dbConnection->serverConnection;
	$getQuestions_Resp->validToken = null;
	$getQuestions_Resp->execution = null;	
	$getQuestions_Resp->questionDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$questionDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getQuestions_Resp, JSON_NUMERIC_CHECK);

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
		$getQuestions_Resp->validToken = $validToken;

		echo json_encode($getQuestions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getQuestions_Resp->validToken = $validToken;

		echo json_encode($getQuestions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get questions on db*/
		/*_Prep query*/
		$getQuestions_Query = "SELECT questions_tab.question_id AS 'question_id',
			questions_tab.question_number AS 'question_number',
			questions_tab.question_value AS 'question_value',
			questions_tab.dimension_id AS 'dimension_id',
			questions_tab.questionsgroup_id AS 'questionsgroup_id',
			questions_tab.question_active AS 'question_active', 
			IfNull(questionsgroups_tab.questionsgroup_value, '') AS 'questionsgroup_value',
			IfNull(questionsgroups_tab.questionsgroup_desc, '') AS 'questionsgroup_desc',
			IfNull(questionshide_tab.question_id, 0) AS 'hide_question_id'
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
			LEFT JOIN questionshide_tab 
			ON questions_tab.question_id = questionshide_tab.question_id AND offices_tab.office_id = questionshide_tab.office_id
			WHERE offices_tab.office_id = :officeId 
			AND forms_tab.clienttype_id = :clientTypeId 
			AND NOT questions_tab.dimension_id = 10 
			AND questions_tab.question_active = 1 
			ORDER BY questions_tab.question_number;
		";
		/*_Prep query*/

		/*_Execute query*/		
		$getQuestions_QueryObj = $dbConnection->selectedPdoConn->prepare($getQuestions_Query);
		$getQuestions_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getQuestions_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getQuestions_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($question_Assoc = $getQuestions_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$questionDetails_Array[] = $question_Assoc;
			}
		}		
		/*_Fetching result*/
		/*Get questions on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$getQuestions_Resp->execution = $execution;
	$getQuestions_Resp->questionDetails_Array = $questionDetails_Array;

	echo json_encode($getQuestions_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["officeId"])){
	
	$getQuestions_Resp = new stdClass();
	$getQuestions_Resp->validAccess = false;
	$getQuestions_Resp->serverConnection = null;
	$getQuestions_Resp->validToken = null;
	$getQuestions_Resp->execution = null;	
	$getQuestions_Resp->questionDetails_Array = null;

	echo json_encode($getQuestions_Resp, JSON_NUMERIC_CHECK);
}
?>