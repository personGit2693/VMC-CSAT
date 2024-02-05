<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
require_once "../../Global PHP/CodeDetails_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["inputCode"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query String*/
	$inputCode = $_POST["inputCode"];
	$token = $_POST["token"];
	/*Query String*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep Response*/
	$validateCode_Resp = new stdClass();
	$validateCode_Resp->validAccess = true;
	$validateCode_Resp->serverConnection = $dbConnection->serverConnection;
	$validateCode_Resp->validToken = null;
	$validateCode_Resp->execution = null;
	$validateCode_Resp->validCode = false;	
	
	$validToken = null;
	$execution = null;
	$validCode = false;
	/*Prep Response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);

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
		$validateCode_Resp->validToken = $validToken;

		echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$validateCode_Resp->validToken = $validToken;

		echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		$getCodeDetails_Obj = getCodeDetails($dbConnection->selectedPdoConn, $inputCode);

		$execution = $getCodeDetails_Obj->execution;
		$count = $getCodeDetails_Obj->count;

		/*_Assign code found result*/
		if($execution){

			if($count !== 0){

				$validCode = true;
			}
		}
		/*_Assign code found result*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$validateCode_Resp->execution = $execution;
	$validateCode_Resp->validCode = $validCode;	

	echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["inputCode"])){
	
	/*Return response*/
	$validateCode_Resp = new stdClass();
	$validateCode_Resp->validAccess = false;
	$validateCode_Resp->serverConnection = null;
	$validateCode_Resp->token = null;
	$validateCode_Resp->execution = null;
	$validateCode_Resp->validCode = null;		

	echo json_encode($validateCode_Resp, JSON_NUMERIC_CHECK);
		
	/*Return response*/
}
?>