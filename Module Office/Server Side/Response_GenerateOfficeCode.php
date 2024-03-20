<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["officeId"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];	
	$officeId = $_POST["officeId"];	
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$generateOfficeCode_Resp = new stdClass();
	$generateOfficeCode_Resp->validAccess = true;
	$generateOfficeCode_Resp->serverConnection = $dbConnection->serverConnection;
	$generateOfficeCode_Resp->validToken = null;
	$generateOfficeCode_Resp->execution = null;
	$generateOfficeCode_Resp->officeCodeCreated = 0;
	$generateOfficeCode_Resp->generatedOfficeCode = null;

	$validToken = null;	
	$execution = null;
	$officeCodeCreated = 0;
	$generatedOfficeCode = null;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($generateOfficeCode_Resp, JSON_NUMERIC_CHECK);

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
		$generateOfficeCode_Resp->validToken = $validToken;

		echo json_encode($generateOfficeCode_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$generateOfficeCode_Resp->validToken = $validToken;

		echo json_encode($generateOfficeCode_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
	
		if(!empty($officeId) && $officeId != 0){		
			
			/*Generate Office Code*/	
			/*_Generating*/
			$alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			$alphanumeric_shuffled = str_shuffle($alphanumeric);
			$alphanumeric_Half = substr($alphanumeric_shuffled, 0, 5);
			$generatedOfficeCode = $alphanumeric_Half;
			/*_Generating*/

			/*_Prep query*/
			$generateOfficeCode_Query = "INSERT INTO officescodes_tab (officecode_code, office_id) VALUES (:generatedOfficeCode, :officeId)"; 							
			/*_Prep query*/

			/*_Execute query*/
			$generateOfficeCode_QueryObj = $dbConnection->selectedPdoConn->prepare($generateOfficeCode_Query);		
			$generateOfficeCode_QueryObj->bindValue(':generatedOfficeCode', $generatedOfficeCode, PDO::PARAM_STR);			
			$generateOfficeCode_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$execution = $generateOfficeCode_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){
				
				$officeCodeCreated = $generateOfficeCode_QueryObj->rowCount();
			}
			/*_Fetching*/			
			/*Generate Office Code*/
		}
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$generateOfficeCode_Resp->execution = $execution;
	$generateOfficeCode_Resp->officeCodeCreated = $officeCodeCreated;
	$generateOfficeCode_Resp->generatedOfficeCode = $generatedOfficeCode;

	echo json_encode($generateOfficeCode_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["officeId"])){
	
	$generateOfficeCode_Resp = new stdClass();
	$generateOfficeCode_Resp->validAccess = false;
	$generateOfficeCode_Resp->serverConnection = null;
	$generateOfficeCode_Resp->validToken = null;
	$generateOfficeCode_Resp->execution = null;
	$generateOfficeCode_Resp->officeCodeCreated = null;
	$generateOfficeCode_Resp->generatedOfficeCode = null;

	echo json_encode($generateOfficeCode_Resp, JSON_NUMERIC_CHECK);
}
?>