<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["accountNumber"]) && isset($_POST["officeId"]) && isset($_POST["identifier"]) && isset($_POST["active"]) && isset($_POST["accToken"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$accountNumber = $_POST["accountNumber"];
	$officeId = $_POST["officeId"];
	$identifier = $_POST["identifier"];
	$active = $_POST["active"];
	$accToken = $_POST["accToken"];
	/*Query string*/


	/*Prep response*/
	$accountSession_Resp = new stdClass();
	$accountSession_Resp->execution = null;
	$accountSession_Resp->globalTokenResult = null;		
	$accountSession_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($accountSession_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$accountSession_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($accountSession_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$accountSession_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($accountSession_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*Create Session*/
		$_SESSION["accountNumber"] = $accountNumber;
		$_SESSION["officeId"] = $officeId;
		$_SESSION["identifier"] = $identifier;
		$_SESSION["active"] = $active;
		$_SESSION["accToken"] = $accToken;

		if($_SESSION["accountNumber"] != "" && isset($_SESSION["accountNumber"]) && $_SESSION["officeId"] != "" && isset($_SESSION["officeId"]) && $_SESSION["identifier"] != "" && isset($_SESSION["identifier"]) && $_SESSION["active"] != "" && isset($_SESSION["active"]) && $_SESSION["accToken"] != "" && isset($_SESSION["accToken"])){
			$execution = true;
		}
		/*Create Session*/
		

		/*_Return response*/
		$accountSession_Resp->execution = $execution;
		$accountSession_Resp->globalTokenResult = $globalTokenResult;				

		echo json_encode($accountSession_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["accountNumber"]) || !isset($_POST["officeId"]) || !isset($_POST["identifier"]) || !isset($_POST["active"]) || !isset($_POST["accToken"])){
	$accountSession_Resp = new stdClass();
	$accountSession_Resp->execution = null;
	$accountSession_Resp->globalTokenResult = null;	

	echo json_encode($accountSession_Resp);
}
?>