<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep response*/
	$getBuildings_Resp = new stdClass();
	$getBuildings_Resp->execution = null;
	$getBuildings_Resp->globalTokenResult = null;
	$getBuildings_Resp->buildingDetails_Array = array();
	$getBuildings_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$buildingDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getBuildings_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getBuildings_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getBuildings_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getBuildings_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getBuildings_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get buildings on db*/
		/*_ _Prep query*/
		$getBuildings_Query = "SELECT * FROM buildings_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getBuildings_QueryObj = $vmcCsat_Conn->prepare($getBuildings_Query);
		$execution = $getBuildings_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($building_Assoc = $getBuildings_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$buildingDetails_Array[] = $building_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get buildings on db*/
		

		/*_Return response*/
		$getBuildings_Resp->execution = $execution;
		$getBuildings_Resp->globalTokenResult = $globalTokenResult;
		$getBuildings_Resp->buildingDetails_Array = $buildingDetails_Array;

		echo json_encode($getBuildings_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getBuildings_Resp = new stdClass();
	$getBuildings_Resp->execution = null;
	$getBuildings_Resp->globalTokenResult = null;
	$getBuildings_Resp->buildingDetails_Array = array();

	echo json_encode($getBuildings_Resp);
}
?>