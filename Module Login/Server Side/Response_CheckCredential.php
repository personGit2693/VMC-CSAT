<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["usernInput"]) && isset($_POST["passInput"]) && isset($_POST["account_identifier"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$usernInput = $_POST["usernInput"];
	$passInput = $_POST["passInput"];
	$account_identifier = $_POST["account_identifier"];		
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	$passInput = md5($passInput.$account_identifier);
	/*Prep Variables*/


	/*Prep response*/
	$checkCredential_Resp = new stdClass();
	$checkCredential_Resp->validAccess = true;
	$checkCredential_Resp->serverConnection = $dbConnection->serverConnection;
	$checkCredential_Resp->validToken = null;
	$checkCredential_Resp->execution = null;	
	$checkCredential_Resp->validAccount = 0;

	$validToken = null;
	$execution = null;		
	$validAccount = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);

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
		$checkCredential_Resp->validToken = $validToken;

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$checkCredential_Resp->validToken = $validToken;

		echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Check Credential*/
		/*_Prep query*/
		$checkCredential_Query = "SELECT * FROM accounts_tab
			WHERE account_number = :usernInput 
			AND account_password = CONVERT(:passInput, BINARY(255)) 
		";							
		/*_Prep query*/

		/*_Execute query*/
		$checkCredential_QueryObj = $dbConnection->selectedPdoConn->prepare($checkCredential_Query);		
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
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$checkCredential_Resp->execution = $execution;
	$checkCredential_Resp->validAccount = $validAccount;

	echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["usernInput"]) || !isset($_POST["passInput"]) || !isset($_POST["account_identifier"])){
	
	$checkCredential_Resp = new stdClass();
	$checkCredential_Resp->validAccess = false;
	$checkCredential_Resp->serverConnection = null;
	$checkCredential_Resp->validToken = null;
	$checkCredential_Resp->execution = null;	
	$checkCredential_Resp->validAccount = null;

	echo json_encode($checkCredential_Resp, JSON_NUMERIC_CHECK);
}
?>