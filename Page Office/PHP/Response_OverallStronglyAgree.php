<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
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


	/*Prep response*/
	$countOverallStronglyAgree_Resp = new stdClass();
	$countOverallStronglyAgree_Resp->execution = null;
	$countOverallStronglyAgree_Resp->globalTokenResult = null;
	$countOverallStronglyAgree_Resp->overallStronglyAgree_Array = array();
	$countOverallStronglyAgree_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$overallStronglyAgree_Array = array();
	$overallStronglyAgree_Array[] = array("Dates", "Strongly Agree");
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countOverallStronglyAgree_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallStronglyAgree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallStronglyAgree_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallStronglyAgree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallStronglyAgree_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Strongly Agree*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
			/*_Prep query*/
			$countOverallStronglyAgree_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Strongly Agree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE) 
				AND questionresponses_tab.score_id = 1 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallStronglyAgree_QueryObj = $vmcCsat_Conn->prepare($countOverallStronglyAgree_Query);
			$countOverallStronglyAgree_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallStronglyAgree_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallStronglyAgree_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallStronglyAgree_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$countOverallStronglyAgree_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $countOverallStronglyAgree_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($countedStronglyAgree_Assoc = $countOverallStronglyAgree_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$overallStronglyAgree_Array[] = array($countedStronglyAgree_Assoc["Dates"], $countedStronglyAgree_Assoc["Strongly Agree"]);
				}
			}
			/*_Fetching*/
		}
		/*Count Overall Strongly Agree*/
		

		/*_Return response*/
		$countOverallStronglyAgree_Resp->execution = $execution;
		$countOverallStronglyAgree_Resp->globalTokenResult = $globalTokenResult;
		$countOverallStronglyAgree_Resp->overallStronglyAgree_Array = $overallStronglyAgree_Array;

		echo json_encode($countOverallStronglyAgree_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$countOverallStronglyAgree_Resp = new stdClass();
	$countOverallStronglyAgree_Resp->execution = null;
	$countOverallStronglyAgree_Resp->globalTokenResult = null;
	$countOverallStronglyAgree_Resp->overallStronglyAgree_Array = array();

	echo json_encode($countOverallStronglyAgree_Resp);
}
?>