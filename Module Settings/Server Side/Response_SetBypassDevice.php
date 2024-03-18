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


if(isset($_POST["token"]) && isset($_POST["bypassPassCodeChecked"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$bypassPassCodeChecked = $_POST["bypassPassCodeChecked"];				
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$setByPassDevice_Resp = new stdClass();
	$setByPassDevice_Resp->validAccess = true;
	$setByPassDevice_Resp->serverConnection = $dbConnection->serverConnection;
	$setByPassDevice_Resp->validToken = null;
	$setByPassDevice_Resp->execution = null;	
	$setByPassDevice_Resp->setBypass = null;	

	$validToken = null;
	$execution = null;		
	$setBypass = null;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($setByPassDevice_Resp, JSON_NUMERIC_CHECK);

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
		$setByPassDevice_Resp->validToken = $validToken;

		echo json_encode($setByPassDevice_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$setByPassDevice_Resp->validToken = $validToken;

		echo json_encode($setByPassDevice_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Set bypass or not*/
		if(filter_var($bypassPassCodeChecked, FILTER_VALIDATE_BOOLEAN)){

			$_SESSION["setBypass"] = true;

		}else if(!filter_var($bypassPassCodeChecked, FILTER_VALIDATE_BOOLEAN)){

			$_SESSION["setBypass"] = false;
		}

		$setBypass = $_SESSION["setBypass"];
		/*Set bypass or not*/
		
				
		if(isset($_SESSION["setBypass"])){

			$execution = true;
		}		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$setByPassDevice_Resp->execution = $execution;	
	$setByPassDevice_Resp->setBypass = $setBypass;

	echo json_encode($setByPassDevice_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["bypassPassCodeChecked"])){
	
	$setByPassDevice_Resp = new stdClass();
	$setByPassDevice_Resp->validAccess = false;
	$setByPassDevice_Resp->serverConnection = null;
	$setByPassDevice_Resp->validToken = null;
	$setByPassDevice_Resp->execution = null;	
	$setByPassDevice_Resp->setBypass = null;

	echo json_encode($setByPassDevice_Resp, JSON_NUMERIC_CHECK);
}
?>