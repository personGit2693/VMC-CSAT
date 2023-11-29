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
	$countOverallServRate_Resp = new stdClass();
	$countOverallServRate_Resp->execution = null;
	$countOverallServRate_Resp->globalTokenResult = null;
	$countOverallServRate_Resp->overallServRate_Array = array();
	$countOverallServRate_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$overallServRate_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countOverallServRate_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallServRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallServRate_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallServRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallServRate_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Service Rating or Client Satisfaction with the office services*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$countOverallServRate_Query = "SELECT scores_tab.score_id AS 'scoreId', 
				scores_tab.score_name AS 'rating', 
				COUNT(questionresponses_tab.questionresponse_id) AS 'responses'
				FROM scores_tab 
				LEFT JOIN questionresponses_tab 
				ON scores_tab.score_id = questionresponses_tab.score_id 
				LEFT JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				GROUP BY scores_tab.score_name
				ORDER BY scores_tab.score_id;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallServRate_QueryObj = $vmcCsat_Conn->prepare($countOverallServRate_Query);
			$countOverallServRate_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':dateFrom', ($dateFrom), PDO::PARAM_STR);
			$countOverallServRate_QueryObj->bindValue(':dateTo', ($dateTo), PDO::PARAM_STR);
			$execution = $countOverallServRate_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){
				while($countedServRate_Assoc = $countOverallServRate_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$overallServRate_Array[] = $countedServRate_Assoc;
				}
			}
			/*_Fetching*/
		}
		/*Count Overall Service Rating or Client Satisfaction with the office services*/
		

		/*_Return response*/
		$countOverallServRate_Resp->execution = $execution;
		$countOverallServRate_Resp->globalTokenResult = $globalTokenResult;
		$countOverallServRate_Resp->overallServRate_Array = $overallServRate_Array;

		echo json_encode($countOverallServRate_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	$countOverallServRate_Resp = new stdClass();
	$countOverallServRate_Resp->execution = null;
	$countOverallServRate_Resp->globalTokenResult = null;
	$countOverallServRate_Resp->overallServRate_Array = array();

	echo json_encode($countOverallServRate_Resp, JSON_NUMERIC_CHECK);
}
?>