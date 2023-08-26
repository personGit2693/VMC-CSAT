<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["usernInput"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$usernInput = $_POST["usernInput"];		
	/*Query string*/


	/*Prep response*/
	$getIdentifier_Resp = new stdClass();
	$getIdentifier_Resp->execution = null;
	$getIdentifier_Resp->globalTokenResult = null;
	$getIdentifier_Resp->accountNumber = null;
	$getIdentifier_Resp->officeId = 0;
	$getIdentifier_Resp->identifier = null;
	$getIdentifier_Resp->active = 0;
	$getIdentifier_Resp->found = 0;
	$getIdentifier_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$accountNumber = null;
	$officeId = 0;
	$identifier = null;
	$active = 0;
	$found = 0;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getIdentifier_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getIdentifier_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getIdentifier_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getIdentifier_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getIdentifier_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Identifier*/
		/*_Prep query*/
		$getIdentifier_Query = "SELECT account_number,
			account_identifier,
			IFNULL(office_id, 0) AS 'office_id',
			account_active			
			FROM accounts_tab WHERE account_number = :usernInput;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getIdentifier_QueryObj = $vmcCsat_Conn->prepare($getIdentifier_Query);		
		$getIdentifier_QueryObj->bindValue(':usernInput', $usernInput, PDO::PARAM_STR);
		$execution = $getIdentifier_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			if($identifier_Assoc = $getIdentifier_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$found = $getIdentifier_QueryObj->rowCount();
				$accountNumber = $identifier_Assoc["account_number"];
				$officeId = $identifier_Assoc["office_id"];
				$identifier = $identifier_Assoc["account_identifier"];
				$active = $identifier_Assoc["account_active"];
			}
		}
		/*_Fetching*/		
		/*Get Identifier*/
		

		/*_Return response*/
		$getIdentifier_Resp->execution = $execution;
		$getIdentifier_Resp->globalTokenResult = $globalTokenResult;
		$getIdentifier_Resp->accountNumber = $accountNumber;
		$getIdentifier_Resp->officeId = $officeId;
		$getIdentifier_Resp->identifier = $identifier;
		$getIdentifier_Resp->active = $active;
		$getIdentifier_Resp->found = $found;

		echo json_encode($getIdentifier_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["usernInput"])){
	$getIdentifier_Resp = new stdClass();
	$getIdentifier_Resp->execution = null;
	$getIdentifier_Resp->globalTokenResult = null;
	$getIdentifier_Resp->accountNumber = null;
	$getIdentifier_Resp->officeId = 0;
	$getIdentifier_Resp->identifier = null;
	$getIdentifier_Resp->active = 0;
	$getIdentifier_Resp->found = 0;

	echo json_encode($getIdentifier_Resp);
}
?>