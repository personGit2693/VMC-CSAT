<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];	
	$officeId = $_POST["officeId"];	
	/*Query string*/


	/*Prep variables*/
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$genOfficeCode_Resp = new stdClass();
	$genOfficeCode_Resp->execution = null;
	$genOfficeCode_Resp->count = 0;
	$genOfficeCode_Resp->generatedOfficeCode = null;
	$genOfficeCode_Resp->globalTokenResult = null;	
	$genOfficeCode_Resp->serverConnection = $serverConnection;

	$execution = null;
	$count = 0;
	$generatedOfficeCode = null;
	$globalTokenResult = null;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($genOfficeCode_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$genOfficeCode_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($genOfficeCode_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$genOfficeCode_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($genOfficeCode_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Generate Office Code*/
		if($officeId != "" && $officeId != 0){		
		
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
			$generateOfficeCode_QueryObj = $vmcCsat_Conn->prepare($generateOfficeCode_Query);		
			$generateOfficeCode_QueryObj->bindValue(':generatedOfficeCode', $generatedOfficeCode, PDO::PARAM_STR);			
			$generateOfficeCode_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$execution = $generateOfficeCode_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){
				$count = $generateOfficeCode_QueryObj->rowCount();
			}
			/*_Fetching*/
			
			/*Generate Office Code*/
		}
		/*Generate Office Code*/
			

		/*Return response*/
		$genOfficeCode_Resp->execution = $execution;
		$genOfficeCode_Resp->count = $count;
		$genOfficeCode_Resp->generatedOfficeCode = $generatedOfficeCode;

		echo json_encode($genOfficeCode_Resp);
		/*Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"])){
	$genOfficeCode_Resp = new stdClass();
	$genOfficeCode_Resp->execution = null;
	$genOfficeCode_Resp->count = 0;
	$genOfficeCode_Resp->generatedOfficeCode = null;
	$genOfficeCode_Resp->globalTokenResult = null;

	echo json_encode($genOfficeCode_Resp);
}
?>