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


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
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
	$dbConnection = connectToDb("vmc_csat");
	
	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$countTotalRespondent_Resp = new stdClass();
	$countTotalRespondent_Resp->validAccess = true;
	$countTotalRespondent_Resp->serverConnection = $dbConnection->serverConnection;
	$countTotalRespondent_Resp->validToken = null;
	$countTotalRespondent_Resp->execution = null;	
	$countTotalRespondent_Resp->totalRespondent = 0;

	$validToken = null;
	$execution = null;	
	$totalRespondent = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);

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
		$countTotalRespondent_Resp->validToken = $validToken;

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$countTotalRespondent_Resp->validToken = $validToken;

		echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){	

		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		

			/*Count Total Respondent*/
			/*_Prep query*/
			$countTotalRespondent_Query = "SELECT COUNT(clientresponse_reference) AS 'totalRespondent' 
				FROM clientresponses_tab 
				WHERE office_id = :officeId 
				AND CONVERT(clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				AND (clienttype_id = :clientTypeInternal OR clienttype_id = :clientTypeExternal);
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countTotalRespondent_QueryObj = $dbConnection->selectedPdoConn->prepare($countTotalRespondent_Query);
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
			/*Count Total Respondent*/
		}		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$countTotalRespondent_Resp->execution = $execution;
	$countTotalRespondent_Resp->totalRespondent = $totalRespondent;

	echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$countTotalRespondent_Resp = new stdClass();
	$countTotalRespondent_Resp->validAccess = false;
	$countTotalRespondent_Resp->serverConnection = null;
	$countTotalRespondent_Resp->validToken = null;
	$countTotalRespondent_Resp->execution = null;	
	$countTotalRespondent_Resp->totalRespondent = null;

	echo json_encode($countTotalRespondent_Resp, JSON_NUMERIC_CHECK);
}
?>