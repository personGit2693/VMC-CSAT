<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"]) && isset($_POST["serviceTypeId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];
	$serviceTypeId = $_POST["serviceTypeId"];
	$clientTypeId = $_POST["clientTypeId"];
	/*Query string*/


	/*Prep response*/
	$getOfficeServices_Resp = new stdClass();
	$getOfficeServices_Resp->execution = null;
	$getOfficeServices_Resp->globalTokenResult = null;
	$getOfficeServices_Resp->officeServiceDetails_Array = array();
	$getOfficeServices_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$officeServiceDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getOfficeServices_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getOfficeServices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOfficeServices_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getOfficeServices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOfficeServices_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get office services on db*/
		/*_ _Prep query*/
		$getOfficeService_Query = "SELECT * FROM officeservices_tab 
			WHERE office_id = :officeId 
			AND servicetype_id = :serviceTypeId
			AND clienttype_id = :clientTypeId;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getOfficeService_QueryObj = $vmcCsat_Conn->prepare($getOfficeService_Query);		
		$getOfficeService_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getOfficeService_QueryObj->bindValue(':serviceTypeId', intval($serviceTypeId), PDO::PARAM_INT);
		$getOfficeService_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getOfficeService_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($officeService_Assoc = $getOfficeService_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$officeServiceDetails_Array[] = $officeService_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get office services on db*/
		

		/*_Return response*/
		$getOfficeServices_Resp->execution = $execution;
		$getOfficeServices_Resp->globalTokenResult = $globalTokenResult;
		$getOfficeServices_Resp->officeServiceDetails_Array = $officeServiceDetails_Array;

		echo json_encode($getOfficeServices_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["serviceTypeId"])){
	$getOfficeServices_Resp = new stdClass();
	$getOfficeServices_Resp->execution = null;
	$getOfficeServices_Resp->globalTokenResult = null;
	$getOfficeServices_Resp->officeServiceDetails_Array = array();

	echo json_encode($getOfficeServices_Resp);
}
?>