<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["newPointOfEntryName"]) && isset($_POST["officeId"])){
	/*Required Files*/
	require_once "../Global PHP/Connection.php";
	require_once "../Global PHP/CheckGlobalToken_Class.php";
	require_once "../Global PHP/UpdateQuestion_Class.php";
	/*Required Files*/


	/*Query string*/
	$newPointOfEntryName = $_POST["newPointOfEntryName"];
	$officeId = $_POST["officeId"];
	$token = $_POST["token"];
	/*Query string*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Prep response*/
	$updatePointOfEntry_Resp = new stdClass();
	$updatePointOfEntry_Resp->updatePointOfEntryResult = null;	
	$updatePointOfEntry_Resp->globalTokenResult = null;
	$updatePointOfEntry_Resp->serverConnection = $serverConnection;

	$updatePointOfEntryResult = null;
	$globalTokenResult = null;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$updatePointOfEntry_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$updatePointOfEntry_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Update question*/
	if($globalTokenResult == null){
		$updatePointOfEntry_Obj = updatePointOfEntry($vmcCsat_Conn, $officeId, $newPointOfEntryName);

		if($updatePointOfEntry_Obj->execution != true){
			$updatePointOfEntryResult = "Updating question has execution problem!";
			$updatePointOfEntry_Resp->updatePointOfEntryResult = $updatePointOfEntryResult;

			echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
			return;
		}else if($updatePointOfEntry_Obj->count == 0){
			$updatePointOfEntryResult = "No question has been updated.";
			$updatePointOfEntry_Resp->updatePointOfEntryResult = $updatePointOfEntryResult;

			echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
			return;
		}


		/*_Return response*/
		$updatePointOfEntry_Resp->updatePointOfEntryResult = $updatePointOfEntryResult;
		$updatePointOfEntry_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}	
	/*Update question*/	
	
}else if(!isset($_POST["token"]) || !isset($_POST["newPointOfEntryName"]) || !isset($_POST["officeId"])){
	$updatePointOfEntry_Resp = new stdClass();
	$updatePointOfEntry_Resp->updatePointOfEntryResult = "unknown";
	$updatePointOfEntry_Resp->globalTokenResult = "unknown";		

	echo json_encode($updatePointOfEntry_Resp, JSON_NUMERIC_CHECK);
}
?>