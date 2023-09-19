<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];
	$clientTypeId = $_POST["clientTypeId"];
	/*Query string*/


	/*Prep response*/
	$getServiceTypes_Resp = new stdClass();
	$getServiceTypes_Resp->execution = null;
	$getServiceTypes_Resp->globalTokenResult = null;
	$getServiceTypes_Resp->serviceTypeDetails_Array = array();
	$getServiceTypes_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$serviceTypeDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getServiceTypes_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getServiceTypes_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getServiceTypes_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getServiceTypes_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getServiceTypes_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get service-type on db*/
		/*_ _Prep query*/
		$getServiceType_Query = "SELECT DISTINCT servicetypes_tab.servicetype_id AS 'serviceTypeId',
			servicetypes_tab.servicetype_value AS 'serviceTypeValue',
			servicetypes_tab.servicetype_abbre AS 'serviceTypeAbbre'
			FROM officeservices_tab 
			INNER JOIN servicetypes_tab 
			ON officeservices_tab.servicetype_id = servicetypes_tab.servicetype_id 
			WHERE officeservices_tab.office_id = :officeId 
			AND officeservices_tab.clienttype_id = :clientTypeId;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getServiceType_QueryObj = $vmcCsat_Conn->prepare($getServiceType_Query);		
		$getServiceType_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getServiceType_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getServiceType_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($serviceType_Assoc = $getServiceType_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$serviceTypeDetails_Array[] = $serviceType_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get service-type on db*/
		

		/*_Return response*/
		$getServiceTypes_Resp->execution = $execution;
		$getServiceTypes_Resp->globalTokenResult = $globalTokenResult;
		$getServiceTypes_Resp->serviceTypeDetails_Array = $serviceTypeDetails_Array;

		echo json_encode($getServiceTypes_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"])){
	$getServiceTypes_Resp = new stdClass();
	$getServiceTypes_Resp->execution = null;
	$getServiceTypes_Resp->globalTokenResult = null;
	$getServiceTypes_Resp->serviceTypeDetails_Array = array();

	echo json_encode($getServiceTypes_Resp);
}
?>