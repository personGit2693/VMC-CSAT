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
	$getEducAttainment_Resp = new stdClass();
	$getEducAttainment_Resp->execution = null;
	$getEducAttainment_Resp->globalTokenResult = null;
	$getEducAttainment_Resp->educAttainmentDetails_Array = array();
	$getEducAttainment_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$educAttainmentDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getEducAttainment_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getEducAttainment_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getEducAttainment_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getEducAttainment_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getEducAttainment_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get religions on db*/
		/*_ _Prep query*/
		$getEducAttainment_Query = "SELECT * FROM educattains_tab ORDER BY educattain_number";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getEducAttainment_QueryObj = $vmcCsat_Conn->prepare($getEducAttainment_Query);
		$execution = $getEducAttainment_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($educAttainment_Assoc = $getEducAttainment_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$educAttainmentDetails_Array[] = $educAttainment_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get religions on db*/
		

		/*_Return response*/
		$getEducAttainment_Resp->execution = $execution;
		$getEducAttainment_Resp->globalTokenResult = $globalTokenResult;
		$getEducAttainment_Resp->educAttainmentDetails_Array = $educAttainmentDetails_Array;

		echo json_encode($getEducAttainment_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getEducAttainment_Resp = new stdClass();
	$getEducAttainment_Resp->execution = null;
	$getEducAttainment_Resp->globalTokenResult = null;
	$getEducAttainment_Resp->educAttainmentDetails_Array = array();

	echo json_encode($getEducAttainment_Resp);
}
?>