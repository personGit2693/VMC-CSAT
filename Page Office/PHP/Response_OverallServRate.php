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
		echo json_encode($countOverallServRate_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallServRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallServRate_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallServRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallServRate_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Service Rating or Client Satisfaction with the office services*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
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
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE)
				GROUP BY scores_tab.score_name
				ORDER BY scores_tab.score_id;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallServRate_QueryObj = $vmcCsat_Conn->prepare($countOverallServRate_Query);
			$countOverallServRate_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallServRate_QueryObj->bindValue(':overallFromDate', ($overallFromDate), PDO::PARAM_STR);
			$countOverallServRate_QueryObj->bindValue(':overallToDate', ($overallToDate), PDO::PARAM_STR);
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

		echo json_encode($countOverallServRate_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$countOverallServRate_Resp = new stdClass();
	$countOverallServRate_Resp->execution = null;
	$countOverallServRate_Resp->globalTokenResult = null;
	$countOverallServRate_Resp->overallServRate_Array = array();

	echo json_encode($countOverallServRate_Resp);
}
?>