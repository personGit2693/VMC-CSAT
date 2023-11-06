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
	$countTotalRespondent_Resp = new stdClass();
	$countTotalRespondent_Resp->execution = null;
	$countTotalRespondent_Resp->globalTokenResult = null;
	$countTotalRespondent_Resp->totalRespondent = 0;
	$countTotalRespondent_Resp->serverConnection = $serverConnection;

	$execution = null;
	$globalTokenResult = null;
	$totalRespondent = 0;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countTotalRespondent_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countTotalRespondent_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Total Respondent*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$countTotalRespondent_Query = "SELECT COUNT(clientresponse_reference) AS 'totalRespondent' 
				FROM clientresponses_tab 
				WHERE office_id = :officeId 
				AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				AND (clienttype_id = :clientTypeInternal OR clienttype_id = :clientTypeExternal);
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countTotalRespondent_QueryObj = $vmcCsat_Conn->prepare($countTotalRespondent_Query);
			$countTotalRespondent_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countTotalRespondent_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countTotalRespondent_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countTotalRespondent_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$countTotalRespondent_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$execution = $countTotalRespondent_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				if($totalRespondent_Assoc = $countTotalRespondent_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$totalRespondent = $totalRespondent_Assoc["totalRespondent"];
				}
			}
			/*_Fetching*/
		}
		/*Count Total Respondent*/
		

		/*_Return response*/
		$countTotalRespondent_Resp->execution = $execution;
		$countTotalRespondent_Resp->globalTokenResult = $globalTokenResult;
		$countTotalRespondent_Resp->totalRespondent = $totalRespondent;

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	$countTotalRespondent_Resp = new stdClass();
	$countTotalRespondent_Resp->execution = null;
	$countTotalRespondent_Resp->globalTokenResult = null;
	$countTotalRespondent_Resp->totalRespondent = 0;

	echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
}
?>