<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["usernInput"]) && isset($_POST["passInput"]) && isset($_POST["identifier"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$usernInput = $_POST["usernInput"];
	$passInput = $_POST["passInput"];
	$identifier = $_POST["identifier"];		
	/*Query string*/


	/*Prep response*/
	$checkCredential_Resp = new stdClass();
	$checkCredential_Resp->execution = null;
	$checkCredential_Resp->globalTokenResult = null;	
	$checkCredential_Resp->validAccount = 0;
	$checkCredential_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$validAccount = 0;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$checkCredential_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$checkCredential_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*Hash password with identifier for possible password*/
		$passInput = md5($passInput.$identifier);
		/*Hash password with identifier for possible password*/

		/*Check Credential*/
		/*_Prep query*/
		$checkCredential_Query = "SELECT * FROM accounts_tab
			WHERE account_number = :usernInput 
			AND account_password = CONVERT(:passInput, BINARY(255)) 
		";							
		/*_Prep query*/

		/*_Execute query*/
		$checkCredential_QueryObj = $vmcCsat_Conn->prepare($checkCredential_Query);		
		$checkCredential_QueryObj->bindValue(':usernInput', $usernInput, PDO::PARAM_STR);
		$checkCredential_QueryObj->bindValue(':passInput', $passInput, PDO::PARAM_STR);
		$execution = $checkCredential_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			$validAccount = $checkCredential_QueryObj->rowCount();
		}
		/*_Fetching*/		
		/*Check Credential*/
		

		/*_Return response*/
		$checkCredential_Resp->execution = $execution;
		$checkCredential_Resp->globalTokenResult = $globalTokenResult;
		$checkCredential_Resp->validAccount = $validAccount;

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["usernInput"]) || !isset($_POST["passInput"]) || !isset($_POST["identifier"])){
	$checkCredential_Resp = new stdClass();
	$checkCredential_Resp->execution = null;
	$checkCredential_Resp->globalTokenResult = null;
	$checkCredential_Resp->validAccount = 0;

	echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
}
?>