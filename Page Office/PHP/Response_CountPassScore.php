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
	$countPassingScore_Resp = new stdClass();
	$countPassingScore_Resp->execution = null;
	$countPassingScore_Resp->globalTokenResult = null;
	$countPassingScore_Resp->countedPassScore = 0;
	$countPassingScore_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$countedPassScore = 0;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countPassingScore_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countPassingScore_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Passing Score*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$countPassScore_Query = "SELECT COUNT(questionresponses_tab.questionresponse_id) AS 'countedPassScore' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (questionresponses_tab.score_id = 1 OR questionresponses_tab.score_id = 2)
				AND CONVERT(questionresponses_tab.questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal);
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countPassScore_QueryObj = $vmcCsat_Conn->prepare($countPassScore_Query);
			$countPassScore_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countPassScore_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countPassScore_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countPassScore_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$countPassScore_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$execution = $countPassScore_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				if($countedPassScore_Assoc = $countPassScore_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$countedPassScore = $countedPassScore_Assoc["countedPassScore"];
				}
			}
			/*_Fetching*/
		}
		/*Count Passing Score*/
		

		/*_Return response*/
		$countPassingScore_Resp->execution = $execution;
		$countPassingScore_Resp->globalTokenResult = $globalTokenResult;
		$countPassingScore_Resp->countedPassScore = $countedPassScore;

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	$countPassingScore_Resp = new stdClass();
	$countPassingScore_Resp->execution = null;
	$countPassingScore_Resp->globalTokenResult = null;
	$countPassingScore_Resp->countedPassScore = 0;

	echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
}
?>