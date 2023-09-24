<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["newCitizenCharterName"]) && isset($_POST["citizenCharterId"])){
	/*Required Files*/
	require_once "../Global PHP/Connection.php";
	require_once "../Global PHP/CheckGlobalToken_Class.php";
	require_once "../Global PHP/UpdateCcName_Class.php";
	/*Required Files*/


	/*Query string*/
	$newCitizenCharterName = $_POST["newCitizenCharterName"];
	$citizenCharterId = $_POST["citizenCharterId"];
	$token = $_POST["token"];
	/*Query string*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Prep response*/
	$updateCcName_Resp = new stdClass();
	$updateCcName_Resp->updateCcNameResult = null;	
	$updateCcName_Resp->globalTokenResult = null;
	$updateCcName_Resp->serverConnection = $serverConnection;

	$updateCcNameResult = null;
	$globalTokenResult = null;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$updateCcName_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$updateCcName_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Update point of entry*/
	if($globalTokenResult == null){
		$updateCcName_Obj = updateCcName($vmcCsat_Conn, $citizenCharterId, $newCitizenCharterName);

		if($updateCcName_Obj->execution != true){
			$updateCcNameResult = "Updating citizen charter name has execution problem!";
			$updateCcName_Resp->updateCcNameResult = $updateCcNameResult;

			echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
			return;
		}else if($updateCcName_Obj->count == 0){
			$updateCcNameResult = "No citizen charter has been updated.";
			$updateCcName_Resp->updateCcNameResult = $updateCcNameResult;

			echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
			return;
		}


		/*_Return response*/
		$updateCcName_Resp->updateCcNameResult = $updateCcNameResult;
		$updateCcName_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}	
	/*Update point of entry*/	
	
}else if(!isset($_POST["token"]) || !isset($_POST["newCitizenCharterName"]) || !isset($_POST["citizenCharterId"])){
	$updateCcName_Resp = new stdClass();
	$updateCcName_Resp->updateCcNameResult = "unknown";
	$updateCcName_Resp->globalTokenResult = "unknown";		

	echo json_encode($updateCcName_Resp, JSON_NUMERIC_CHECK);
}
?>