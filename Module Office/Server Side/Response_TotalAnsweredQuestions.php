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


if(isset($_POST["token"]) && isset($_POST["noRating_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$noRating_Id = $_POST["noRating_Id"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){

		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$totalAnsweredQuestions_Resp = new stdClass();
	$totalAnsweredQuestions_Resp->validAccess = true;
	$totalAnsweredQuestions_Resp->serverConnection = $dbConnection->serverConnection;
	$totalAnsweredQuestions_Resp->validToken = null;
	$totalAnsweredQuestions_Resp->execution = null;	
	$totalAnsweredQuestions_Resp->totalAnsweredQuestions = 0;

	$validToken = null;
	$execution = null;		
	$totalAnsweredQuestions = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($totalAnsweredQuestions_Resp, JSON_NUMERIC_CHECK);

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
		$totalAnsweredQuestions_Resp->validToken = $validToken;

		echo json_encode($totalAnsweredQuestions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$totalAnsweredQuestions_Resp->validToken = $validToken;

		echo json_encode($totalAnsweredQuestions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){	
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Count Overall Engagement*/			
			/*_Prep query*/
			$totalAnsweredQuestions_Query = "SELECT COUNT(questionresponses_tab.questionresponse_id) AS 'totalAnsweredQuestions' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND NOT questionresponses_tab.score_id = :noRating_Id 
				AND CONVERT(questionresponses_tab.questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal);
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$totalAnsweredQuestions_QueryObj = $dbConnection->selectedPdoConn->prepare($totalAnsweredQuestions_Query);
			$totalAnsweredQuestions_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$totalAnsweredQuestions_QueryObj->bindValue(':noRating_Id', intval($noRating_Id), PDO::PARAM_INT);
			$totalAnsweredQuestions_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$totalAnsweredQuestions_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$totalAnsweredQuestions_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$totalAnsweredQuestions_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$execution = $totalAnsweredQuestions_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){

				if($totalAnsweredQuestion_Assoc = $totalAnsweredQuestions_QueryObj->fetch(PDO::FETCH_ASSOC)){
					
					$totalAnsweredQuestions = $totalAnsweredQuestion_Assoc["totalAnsweredQuestions"];
				}
			}
			/*_Fetching*/
			/*Count Overall Engagement*/
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$totalAnsweredQuestions_Resp->execution = $execution;
	$totalAnsweredQuestions_Resp->totalAnsweredQuestions = $totalAnsweredQuestions;

	echo json_encode($totalAnsweredQuestions_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

	
}else if(!isset($_POST["token"]) || !isset($_POST["noRating_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$totalAnsweredQuestions_Resp = new stdClass();
	$totalAnsweredQuestions_Resp->validAccess = false;
	$totalAnsweredQuestions_Resp->serverConnection = null;
	$totalAnsweredQuestions_Resp->validToken = null;
	$totalAnsweredQuestions_Resp->execution = null;	
	$totalAnsweredQuestions_Resp->totalAnsweredQuestions = null;

	echo json_encode($totalAnsweredQuestions_Resp, JSON_NUMERIC_CHECK);
}
?>