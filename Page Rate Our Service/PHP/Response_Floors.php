<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["buildingId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$buildingId = $_POST["buildingId"];
	/*Query string*/


	/*Prep response*/
	$getFloors_Resp = new stdClass();
	$getFloors_Resp->execution = null;
	$getFloors_Resp->globalTokenResult = null;
	$getFloors_Resp->floorDetails_Array = array();
	$getFloors_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$floorDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getFloors_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getFloors_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getFloors_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getFloors_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getFloors_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get floors on db*/
		/*_ _Prep query*/
		$getFloors_Query = "SELECT DISTINCT floors_tab.floor_id AS 'floorId',
			floors_tab.floor_value AS 'floor', 
			floors_tab.floor_abbre AS 'floorAbbre'
			FROM offices_tab
			INNER JOIN floors_tab 
			ON offices_tab.floor_id = floors_tab.floor_id 
			WHERE offices_tab.building_id = :buildingId;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getFloors_QueryObj = $vmcCsat_Conn->prepare($getFloors_Query);		
		$getFloors_QueryObj->bindValue(':buildingId', intval($buildingId), PDO::PARAM_INT);
		$execution = $getFloors_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($floor_Assoc = $getFloors_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$floorDetails_Array[] = $floor_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get floors on db*/
		

		/*_Return response*/
		$getFloors_Resp->execution = $execution;
		$getFloors_Resp->globalTokenResult = $globalTokenResult;
		$getFloors_Resp->floorDetails_Array = $floorDetails_Array;

		echo json_encode($getFloors_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["buildingId"])){
	$getFloors_Resp = new stdClass();
	$getFloors_Resp->execution = null;
	$getFloors_Resp->globalTokenResult = null;
	$getFloors_Resp->floorDetails_Array = array();

	echo json_encode($getFloors_Resp);
}
?>