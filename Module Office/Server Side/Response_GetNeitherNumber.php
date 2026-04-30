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


if(isset($_POST["token"]) && isset($_POST["neither_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$neither_Id = $_POST["neither_Id"];

	$dateStart = strtotime($_POST["dateFrom"]);
	$dateEnd = strtotime($_POST["dateTo"]);
	/*Query string*/


	/*Prep variables*/
	$csatDbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getNeitherNumber_Resp = new stdClass();
	$getNeitherNumber_Resp->validAccess = true;
	$getNeitherNumber_Resp->serverConnection = $csatDbConnection->serverConnection;
	$getNeitherNumber_Resp->selectedPdoConn = ($csatDbConnection->selectedPdoConn !== null) ? true : null;
	$getNeitherNumber_Resp->validToken = null;
	$getNeitherNumber_Resp->execution = null;	
	$getNeitherNumber_Resp->neitherNumberDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$neitherNumberDetails_Array = array();
	$neitherNumberDetails_Array[] = array("Dates", "Neither Agree nor Disagree");
	/*Prep response*/


	/*Check connection*/
	if($csatDbConnection->serverConnection != null){

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK));
	}else if($csatDbConnection->selectedPdoConn == null){

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK));
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($csatDbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$getNeitherNumber_Resp->validToken = $validToken;

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK));

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getNeitherNumber_Resp->validToken = $validToken;

		/*_Disconnect*/
		$csatDbConnection = null;
		/*_Disconnect*/

		exit(json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK));
	}
	/*Validate token*/


	if($validToken === null){		
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Create dates*/			
			while($dateStart <= $dateEnd){

				$neitherNumberDetails_Array[] = array(date("Y-m-d", $dateStart), 0);

				$dateStart = strtotime("+1 days", $dateStart);
			}
			/*Create dates*/
			

			/*Get neither number*/			
			/*_Prep query*/
			$getNeitherNumber_Query = "SELECT CONVERT(questionresponse_datetime, DATE) AS 'Dates',
				COUNT(questionresponses_tab.questionresponse_id) AS 'Neither Agree nor Disagree' 
				FROM questionresponses_tab 
				INNER JOIN clientresponses_tab 
				ON questionresponses_tab.clientresponse_reference = clientresponses_tab.clientresponse_reference 
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal) 
				AND questionresponse_datetime >= :dateFrom
				AND questionresponse_datetime < DATE_ADD(:dateTo, INTERVAL 1 DAY)
				AND questionresponses_tab.score_id = :neither_Id
				GROUP BY CONVERT(questionresponse_datetime, DATE) 
				ORDER BY CONVERT(questionresponse_datetime, DATE) ASC;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getNeitherNumber_QueryObj = $csatDbConnection->selectedPdoConn->prepare($getNeitherNumber_Query);
			$getNeitherNumber_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getNeitherNumber_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getNeitherNumber_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getNeitherNumber_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getNeitherNumber_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$getNeitherNumber_QueryObj->bindValue(':neither_Id', intval($neither_Id), PDO::PARAM_INT);
			$execution = $getNeitherNumber_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){	

				while($neitherNumber_Assoc = $getNeitherNumber_QueryObj->fetch(PDO::FETCH_ASSOC)){
					
					for($index=0; $index < count($neitherNumberDetails_Array); $index++){

						if($neitherNumberDetails_Array[$index][0] == $neitherNumber_Assoc["Dates"]){

							$neitherNumberDetails_Array[$index][1] = $neitherNumber_Assoc["Neither Agree nor Disagree"];
						}
					}
				}
			}
			/*_Fetching*/
			/*Get neither number*/
		}
	}


	/*Disconnect*/
	$csatDbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getNeitherNumber_Resp->execution = $execution;
	$getNeitherNumber_Resp->neitherNumberDetails_Array = $neitherNumberDetails_Array;

	echo json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["neither_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getNeitherNumber_Resp = new stdClass();
	$getNeitherNumber_Resp->validAccess = false;
	$getNeitherNumber_Resp->serverConnection = null;
	$getNeitherNumber_Resp->validToken = null;
	$getNeitherNumber_Resp->execution = null;	
	$getNeitherNumber_Resp->neitherNumberDetails_Array = null;

	echo json_encode($getNeitherNumber_Resp, JSON_NUMERIC_CHECK);
}
?>