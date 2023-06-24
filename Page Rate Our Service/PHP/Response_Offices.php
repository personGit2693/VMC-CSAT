<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["buildingId"]) && isset($_POST["floorId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$buildingId = $_POST["buildingId"];
	$floorId = $_POST["floorId"];
	/*Query string*/


	/*Prep response*/
	$getOffices_Resp = new stdClass();
	$getOffices_Resp->execution = null;
	$getOffices_Resp->globalTokenResult = null;
	$getOffices_Resp->officeDetails_Array = array();
	$getOffices_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$officeDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getOffices_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getOffices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOffices_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getOffices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOffices_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get offices on db*/
		/*_ _Prep query*/
		$getOffices_Query = "SELECT * FROM offices_tab 
			WHERE building_id = :buildingId
			AND floor_id = :floorId;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getOffices_QueryObj = $vmcCsat_Conn->prepare($getOffices_Query);		
		$getOffices_QueryObj->bindValue(':buildingId', intval($buildingId), PDO::PARAM_INT);
		$getOffices_QueryObj->bindValue(':floorId', intval($floorId), PDO::PARAM_INT);
		$execution = $getOffices_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($office_Assoc = $getOffices_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$officeDetails_Array[] = $office_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get offices on db*/
		

		/*_Return response*/
		$getOffices_Resp->execution = $execution;
		$getOffices_Resp->globalTokenResult = $globalTokenResult;
		$getOffices_Resp->officeDetails_Array = $officeDetails_Array;

		echo json_encode($getOffices_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["buildingId"]) || isset($_POST["floorId"])){
	$getOffices_Resp = new stdClass();
	$getOffices_Resp->execution = null;
	$getOffices_Resp->globalTokenResult = null;
	$getOffices_Resp->officeDetails_Array = array();

	echo json_encode($getOffices_Resp);
}
?>