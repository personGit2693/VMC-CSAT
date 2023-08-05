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
	$countOverallStronglyDisagree_Resp = new stdClass();
	$countOverallStronglyDisagree_Resp->execution = null;
	$countOverallStronglyDisagree_Resp->globalTokenResult = null;
	$countOverallStronglyDisagree_Resp->overallStronglyDisagree_Array = array();
	$countOverallStronglyDisagree_Resp->serverConnection = $serverConnection;

	$execution = null;
	$globalTokenResult = null;
	$overallStronglyDisagree_Array = array();
	$overallStronglyDisagree_Array[] = array("Dates", "Strongly Disagree");
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($countOverallStronglyDisagree_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$countOverallStronglyDisagree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallStronglyDisagree_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$countOverallStronglyDisagree_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($countOverallStronglyDisagree_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Count Overall Strongly Disagree*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
			/*_Prep query*/
			$countOverallStronglyDisagree_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Strongly Disagree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND CONVERT(questionresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE) 
				AND questionresponses_tab.score_id = 5 
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countOverallStronglyDisagree_QueryObj = $vmcCsat_Conn->prepare($countOverallStronglyDisagree_Query);
			$countOverallStronglyDisagree_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countOverallStronglyDisagree_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$countOverallStronglyDisagree_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$countOverallStronglyDisagree_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$countOverallStronglyDisagree_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $countOverallStronglyDisagree_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($countedStronglyDisagree_Assoc = $countOverallStronglyDisagree_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$overallStronglyDisagree_Array[] = array($countedStronglyDisagree_Assoc["Dates"], $countedStronglyDisagree_Assoc["Strongly Disagree"]);
				}
			}
			/*_Fetching*/
		}
		/*Count Overall Strongly Disagree*/
		

		/*_Return response*/
		$countOverallStronglyDisagree_Resp->execution = $execution;
		$countOverallStronglyDisagree_Resp->globalTokenResult = $globalTokenResult;
		$countOverallStronglyDisagree_Resp->overallStronglyDisagree_Array = $overallStronglyDisagree_Array;

		echo json_encode($countOverallStronglyDisagree_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$countOverallStronglyDisagree_Resp = new stdClass();
	$countOverallStronglyDisagree_Resp->execution = null;
	$countOverallStronglyDisagree_Resp->globalTokenResult = null;
	$countOverallStronglyDisagree_Resp->overallStronglyDisagree_Array = array();

	echo json_encode($countOverallStronglyDisagree_Resp);
}
?>