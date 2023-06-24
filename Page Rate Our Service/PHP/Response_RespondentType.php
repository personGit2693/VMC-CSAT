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
	$getRespondentsType_Resp = new stdClass();
	$getRespondentsType_Resp->execution = null;
	$getRespondentsType_Resp->respondentDetails_Array = array();
	$getRespondentsType_Resp->globalTokenResult = null;
	$getRespondentsType_Resp->serverConnection = $serverConnection;

	$execution = null;
	$respondentDetails_Array = array(); 
	$globalTokenResult = null;
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getRespondentsType_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getRespondentsType_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getRespondentsType_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getRespondentsType_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getRespondentsType_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get respondents type on db*/
		/*_ _Prep query*/
		$getRespondentsType_Query = "SELECT * FROM respondents_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getRespondentsType_QueryObj = $vmcCsat_Conn->prepare($getRespondentsType_Query);
		$execution = $getRespondentsType_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($respondentType_Assoc = $getRespondentsType_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$respondentDetails_Array[] = $respondentType_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get respondents type on db*/
		

		/*_Return response*/
		$getRespondentsType_Resp->execution = $execution;
		$getRespondentsType_Resp->globalTokenResult = $globalTokenResult;
		$getRespondentsType_Resp->respondentDetails_Array = $respondentDetails_Array;

		echo json_encode($getRespondentsType_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getRespondentsType_Resp = new stdClass();
	$getRespondentsType_Resp->execution = null;
	$getRespondentsType_Resp->globalTokenResult = null;
	$getRespondentsType_Resp->respondentDetails_Array = array();

	echo json_encode($getRespondentsType_Resp);
}
?>