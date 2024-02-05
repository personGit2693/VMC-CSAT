<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["respondentId"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];
	$clientTypeId = $_POST["clientTypeId"];
	$respondentId = $_POST["respondentId"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getServiceTypes_Resp = new stdClass();
	$getServiceTypes_Resp->validAccess = true;
	$getServiceTypes_Resp->serverConnection = $dbConnection->serverConnection;
	$getServiceTypes_Resp->validToken = null;
	$getServiceTypes_Resp->execution = null;	
	$getServiceTypes_Resp->serviceTypeDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$serviceTypeDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getServiceTypes_Resp, JSON_NUMERIC_CHECK);

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
		$getServiceTypes_Resp->validToken = $validToken;

		echo json_encode($getServiceTypes_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getServiceTypes_Resp->validToken = $validToken;

		echo json_encode($getServiceTypes_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get service-type on db*/
		/*_Prep query*/
		$getServiceType_Query = "SELECT DISTINCT servicetypes_tab.servicetype_id AS 'serviceTypeId',
			servicetypes_tab.servicetype_value AS 'serviceTypeValue',
			servicetypes_tab.servicetype_abbre AS 'serviceTypeAbbre'
			FROM officeservices_tab 
			INNER JOIN servicetypes_tab 
			ON officeservices_tab.servicetype_id = servicetypes_tab.servicetype_id 
			INNER JOIN respondenttags_tab 
			ON officeservices_tab.office_id = respondenttags_tab.office_id 
			WHERE officeservices_tab.office_id = :officeId 
			AND officeservices_tab.clienttype_id = :clientTypeId 
			AND respondenttags_tab.respondent_id = :respondentId;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getServiceType_QueryObj = $dbConnection->selectedPdoConn->prepare($getServiceType_Query);		
		$getServiceType_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getServiceType_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$getServiceType_QueryObj->bindValue(':respondentId', intval($respondentId), PDO::PARAM_INT);
		$execution = $getServiceType_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($serviceType_Assoc = $getServiceType_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$serviceTypeDetails_Array[] = $serviceType_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get service-type on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getServiceTypes_Resp->execution = $execution;	
	$getServiceTypes_Resp->serviceTypeDetails_Array = $serviceTypeDetails_Array;

	echo json_encode($getServiceTypes_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["respondentId"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"])){
	
	$getServiceTypes_Resp = new stdClass();
	$getServiceTypes_Resp->validAccess = false;
	$getServiceTypes_Resp->serverConnection = null;
	$getServiceTypes_Resp->validToken = null;
	$getServiceTypes_Resp->execution = null;	
	$getServiceTypes_Resp->serviceTypeDetails_Array = null;

	echo json_encode($getServiceTypes_Resp, JSON_NUMERIC_CHECK);
}
?>