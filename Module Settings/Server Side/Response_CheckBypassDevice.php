<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
session_start();
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];				
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$checkByPassDevice_Resp = new stdClass();
	$checkByPassDevice_Resp->validAccess = true;
	$checkByPassDevice_Resp->serverConnection = $dbConnection->serverConnection;
	$checkByPassDevice_Resp->validToken = null;
	$checkByPassDevice_Resp->execution = null;	
	$checkByPassDevice_Resp->bypassIsSet = null;	

	$validToken = null;
	$execution = null;		
	$bypassIsSet = null;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$checkByPassDevice_Resp->validToken = $validToken;

		echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$checkByPassDevice_Resp->validToken = $validToken;

		echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Check bypass if set*/
		if(isset($_SESSION["setBypass"]) && filter_var($_SESSION["setBypass"], FILTER_VALIDATE_BOOLEAN)){

			$bypassIsSet = true;

		}else if(!isset($_SESSION["setBypass"]) || !filter_var($_SESSION["setBypass"], FILTER_VALIDATE_BOOLEAN)){

			$bypassIsSet = false;
		}
		/*Check bypass if set*/


		if($bypassIsSet !== null){

			$execution = true;
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$checkByPassDevice_Resp->execution = $execution;	
	$checkByPassDevice_Resp->bypassIsSet = $bypassIsSet;

	echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){
	
	$checkByPassDevice_Resp = new stdClass();
	$checkByPassDevice_Resp->validAccess = false;
	$checkByPassDevice_Resp->serverConnection = null;
	$checkByPassDevice_Resp->validToken = null;
	$checkByPassDevice_Resp->execution = null;	
	$checkByPassDevice_Resp->bypassIsSet = null;

	echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);
}
?>