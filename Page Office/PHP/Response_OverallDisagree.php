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
	$countOverallDisagree_Resp = new stdClass();
	$countOverallDisagree_Resp->execution = null;
	$countOverallDisagree_Resp->globalTokenResult = null;
	$countOverallDisagree_Resp->overallDisagree_Array = array();
	$countOverallDisagree_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$overallDisagree_Array = array();
	$overallDisagree_Array[] = array("Dates", "Disagree");
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countOverallDisagree_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallDisagree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallDisagree_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallDisagree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallDisagree_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Disagree*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
			/*_Prep query*/
			$countOverallDisagree_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Disagree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE) 
				AND questionresponses_tab.score_id = 4 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallDisagree_QueryObj = $vmcCsat_Conn->prepare($countOverallDisagree_Query);
			$countOverallDisagree_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallDisagree_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallDisagree_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallDisagree_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$countOverallDisagree_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $countOverallDisagree_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($countedDisagree_Assoc = $countOverallDisagree_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$overallDisagree_Array[] = array($countedDisagree_Assoc["Dates"], $countedDisagree_Assoc["Disagree"]);
				}
			}
			/*_Fetching*/
		}
		/*Count Overall Disagree*/
		

		/*_Return response*/
		$countOverallDisagree_Resp->execution = $execution;
		$countOverallDisagree_Resp->globalTokenResult = $globalTokenResult;
		$countOverallDisagree_Resp->overallDisagree_Array = $overallDisagree_Array;

		echo json_encode($countOverallDisagree_Resp);
		/*_Return response*/
	}
	/*Valid global token*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$countOverallDisagree_Resp = new stdClass();
	$countOverallDisagree_Resp->execution = null;
	$countOverallDisagree_Resp->globalTokenResult = null;
	$countOverallDisagree_Resp->overallDisagree_Array = array();

	echo json_encode($countOverallDisagree_Resp);
}
?>