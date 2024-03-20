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

	$officeId = 0;
	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
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

		$validToken = "Validating global token has execution_CheckBypass problem!";
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
		if(isset($_SESSION["setBypass"]) && filter_var($_SESSION["setBypass"], FILTER_VALIDATE_BOOLEAN) && $officeId != 0){

			$bypassIsSet = true;

			/*_Generate Office Code*/	
			/*_ _Generating*/
			$alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			$alphanumeric_shuffled = str_shuffle($alphanumeric);
			$alphanumeric_Half = substr($alphanumeric_shuffled, 0, 5);
			$generatedOfficeCode = $alphanumeric_Half;
			/*_ _Generating*/

			/*_ _Prep query*/
			$generateOfficeCode_Query = "INSERT INTO officescodes_tab (officecode_code, office_id) VALUES (:generatedOfficeCode, :officeId)"; 							
			/*_ _Prep query*/

			/*_ _Execute query*/
			$generateOfficeCode_QueryObj = $dbConnection->selectedPdoConn->prepare($generateOfficeCode_Query);		
			$generateOfficeCode_QueryObj->bindValue(':generatedOfficeCode', $generatedOfficeCode, PDO::PARAM_STR);			
			$generateOfficeCode_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$execution_CodeCreated = $generateOfficeCode_QueryObj->execute();
			/*_ _Execute query*/

			/*_ _Fetching*/
			if($execution_CodeCreated){
				
				$officeCodeCreated = $generateOfficeCode_QueryObj->rowCount();
			}
			/*_ _Fetching*/			
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