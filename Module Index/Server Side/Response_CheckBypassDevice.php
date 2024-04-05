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
require_once "../../Global PHP/GeneratePasscode_Class.php";
/*Global Required Files*/


if(isset($_POST["token"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];				
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	$officeId = 0;
	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0 && !isset($_SESSION["unitAbbre"])){
	
		$officeId = $_SESSION["office_id"];

	}else if(isset($_SESSION["unitAbbre"])){

		if($_SESSION["unitAbbre"] === "EFMS"){

			$officeId = 56;

		}else if($_SESSION["unitAbbre"] === "IMISS"){

			$officeId = 29;
		}
	}
	/*Prep Variables*/


	/*Prep response*/
	$checkByPassDevice_Resp = new stdClass();
	$checkByPassDevice_Resp->validAccess = true;
	$checkByPassDevice_Resp->serverConnection = $dbConnection->serverConnection;
	$checkByPassDevice_Resp->validToken = null;
	$checkByPassDevice_Resp->execution_CheckBypass = null;	
	$checkByPassDevice_Resp->execution_CodeCreated = null;
	$checkByPassDevice_Resp->bypassIsSet = null;
	$checkByPassDevice_Resp->officeCodeCreated = 0;	
	$checkByPassDevice_Resp->generatedOfficeCode = null;

	$validToken = null;
	$execution_CheckBypass = null;
	$execution_CodeCreated = null;		
	$bypassIsSet = null;
	$officeCodeCreated = 0;
	$generatedOfficeCode = null;	
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
		if((isset($_SESSION["setBypass"]) && filter_var($_SESSION["setBypass"], FILTER_VALIDATE_BOOLEAN) && $officeId != 0) || (isset($_SESSION["unitAbbre"]))){

			$bypassIsSet = true;

			/*_Generate Office Code*/	
			$generatePasscode_Obj = generatePasscode($dbConnection->selectedPdoConn, intval($officeId));

			$execution_CodeCreated = $generatePasscode_Obj->execution;
			$officeCodeCreated = $generatePasscode_Obj->officeCodeCreated;
			$generatedOfficeCode = $generatePasscode_Obj->generatedOfficeCode;
			/*_Generate Office Code*/

		}else if(!isset($_SESSION["setBypass"]) || !filter_var($_SESSION["setBypass"], FILTER_VALIDATE_BOOLEAN) || $officeId == 0){

			$bypassIsSet = false;
		}
		/*Check bypass if set*/


		if($bypassIsSet !== null){

			$execution_CheckBypass = true;
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$checkByPassDevice_Resp->execution_CheckBypass = $execution_CheckBypass;
	$checkByPassDevice_Resp->execution_CodeCreated = $execution_CodeCreated;	
	$checkByPassDevice_Resp->bypassIsSet = $bypassIsSet;
	$checkByPassDevice_Resp->officeCodeCreated = $officeCodeCreated;	
	$checkByPassDevice_Resp->generatedOfficeCode = $generatedOfficeCode;	

	echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){
	
	$checkByPassDevice_Resp = new stdClass();
	$checkByPassDevice_Resp->validAccess = false;
	$checkByPassDevice_Resp->serverConnection = null;
	$checkByPassDevice_Resp->validToken = null;
	$checkByPassDevice_Resp->execution_CheckBypass = null;
	$checkByPassDevice_Resp->execution_CodeCreated = null;	
	$checkByPassDevice_Resp->bypassIsSet = null;
	$checkByPassDevice_Resp->officeCodeCreated = null;	
	$checkByPassDevice_Resp->generatedOfficeCode = null;

	echo json_encode($checkByPassDevice_Resp, JSON_NUMERIC_CHECK);
}
?>