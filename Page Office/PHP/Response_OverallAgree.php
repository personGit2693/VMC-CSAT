<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["overallFromDate"]) && isset($_POST["overallToDate"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$overallFromDate = $_POST["overallFromDate"];
	$overallToDate = $_POST["overallToDate"];
	/*Query string*/


	/*Prep variables*/
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$countOverallAgree_Resp = new stdClass();
	$countOverallAgree_Resp->execution = null;
	$countOverallAgree_Resp->globalTokenResult = null;
	$countOverallAgree_Resp->overallAgree_Array = array();
	$countOverallAgree_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$overallAgree_Array = array();
	$overallAgree_Array[] = array("Dates", "Agree");
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countOverallAgree_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallAgree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallAgree_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallAgree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallAgree_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Agree*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
			/*_Prep query*/
			$countOverallAgree_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Agree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE) 
				AND questionresponses_tab.score_id = 2 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallAgree_QueryObj = $vmcCsat_Conn->prepare($countOverallAgree_Query);
			$countOverallAgree_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallAgree_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallAgree_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallAgree_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$countOverallAgree_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $countOverallAgree_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($countedAgree_Assoc = $countOverallAgree_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$overallAgree_Array[] = array($countedAgree_Assoc["Dates"], $countedAgree_Assoc["Agree"]);
				}
			}
			/*_Fetching*/
		}
		/*Count Overall Agree*/
		

		/*_Return response*/
		$countOverallAgree_Resp->execution = $execution;
		$countOverallAgree_Resp->globalTokenResult = $globalTokenResult;
		$countOverallAgree_Resp->overallAgree_Array = $overallAgree_Array;

		echo json_encode($countOverallAgree_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$countOverallAgree_Resp = new stdClass();
	$countOverallAgree_Resp->execution = null;
	$countOverallAgree_Resp->globalTokenResult = null;
	$countOverallAgree_Resp->overallAgree_Array = array();

	echo json_encode($countOverallAgree_Resp);
}
?>