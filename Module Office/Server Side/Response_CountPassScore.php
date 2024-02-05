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


if(isset($_POST["token"]) && isset($_POST["agree_Id"]) && isset($_POST["stronglyAgree_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$stronglyAgree_Id = $_POST["stronglyAgree_Id"];
	$agree_Id = $_POST["agree_Id"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$countPassingScore_Resp = new stdClass();
	$countPassingScore_Resp->validAccess = true;
	$countPassingScore_Resp->serverConnection = $dbConnection->serverConnection;
	$countPassingScore_Resp->validToken = null;
	$countPassingScore_Resp->execution = null;	
	$countPassingScore_Resp->countedPassScore = 0;

	$validToken = null;
	$execution = null;		
	$countedPassScore = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);

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
		$countPassingScore_Resp->validToken = $validToken;

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$countPassingScore_Resp->validToken = $validToken;

		echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		

		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Count Passing Score*/
			/*_Prep query*/
			$countPassScore_Query = "SELECT COUNT(questionresponses_tab.questionresponse_id) AS 'countedPassScore' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (questionresponses_tab.score_id = :stronglyAgree_Id OR questionresponses_tab.score_id = :agree_Id)
				AND CONVERT(questionresponses_tab.questionresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal);
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$countPassScore_QueryObj = $dbConnection->selectedPdoConn->prepare($countPassScore_Query);
			$countPassScore_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$countPassScore_QueryObj->bindValue(':stronglyAgree_Id', intval($stronglyAgree_Id), PDO::PARAM_INT);
			$countPassScore_QueryObj->bindValue(':agree_Id', intval($agree_Id), PDO::PARAM_INT);			
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
			/*Count Passing Score*/
		}				
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$countPassingScore_Resp->execution = $execution;
	$countPassingScore_Resp->countedPassScore = $countedPassScore;

	echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["agree_Id"]) || !isset($_POST["stronglyAgree_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$countPassingScore_Resp = new stdClass();
	$countPassingScore_Resp->validAccess = false;
	$countPassingScore_Resp->serverConnection = null;
	$countPassingScore_Resp->validToken = null;
	$countPassingScore_Resp->execution = null;	
	$countPassingScore_Resp->countedPassScore = null;

	echo json_encode($countPassingScore_Resp, JSON_NUMERIC_CHECK);
}
?>