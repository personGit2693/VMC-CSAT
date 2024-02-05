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


if(isset($_POST["token"]) && isset($_POST["usernInput"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$usernInput = $_POST["usernInput"];	
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	/*_Generate Token Section*/
	$alphanumeric = "abcdefghijklmnopqrstuvwxyz1234567890";
	$alphanumeric_shuffled = str_shuffle($alphanumeric);
	$alphanumeric_Half = substr($alphanumeric_shuffled, 0, strlen($alphanumeric)/2);
	$generated_Token = rand(1000,9999).$alphanumeric_Half.rand(1000,9999);
	/*_Generate Token Section*/
	/*Prep Variables*/


	/*Prep response*/
	$generateAccToken_Resp = new stdClass();
	$generateAccToken_Resp->validAccess = true;
	$generateAccToken_Resp->serverConnection = $dbConnection->serverConnection;
	$generateAccToken_Resp->execution = null;
	$generateAccToken_Resp->validToken = null;	
	$generateAccToken_Resp->tokenCreated = 0;
	$generateAccToken_Resp->accToken = null;

	$validToken = null;
	$execution = null;		
	$tokenCreated = 0;
	$accToken = null;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($generateAccToken_Resp, JSON_NUMERIC_CHECK);

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
		$generateAccToken_Resp->validToken = $validToken;

		echo json_encode($generateAccToken_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$generateAccToken_Resp->validToken = $validToken;

		echo json_encode($generateAccToken_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		

		/*Account token on db*/
		/*_Prep query*/
		$generateAccToken_Query = "INSERT INTO accounttokens_tab (
				account_number, 
				accounttoken_value, 
				accounttoken_expiration
			) VALUES (
				:usernInput, 
				:generated_Token,
				DATE_ADD(CONVERT(:datetimeNow, DATETIME), INTERVAL 1 DAY)
			);
		";	
		/*_Prep query*/

		/*_Execute query*/
		$generateAccToken_QueryObj = $dbConnection->selectedPdoConn->prepare($generateAccToken_Query);		
		$generateAccToken_QueryObj->bindValue(':usernInput', $usernInput, PDO::PARAM_STR);
		$generateAccToken_QueryObj->bindValue(':generated_Token', $generated_Token, PDO::PARAM_STR);
		$generateAccToken_QueryObj->bindValue(':datetimeNow', date('Y-m-d H:i:s', time()), PDO::PARAM_STR);
		$execution = $generateAccToken_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			$tokenCreated = $generateAccToken_QueryObj->rowCount();
			$accToken = $generated_Token;
		}
		/*_Fetching*/		
		/*Account token on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$generateAccToken_Resp->execution = $execution;
	$generateAccToken_Resp->tokenCreated = $tokenCreated;
	$generateAccToken_Resp->accToken = $accToken;

	echo json_encode($generateAccToken_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["usernInput"])){
	
	$generateAccToken_Resp = new stdClass();
	$generateAccToken_Resp->validAccess = false;
	$generateAccToken_Resp->serverConnection = null;
	$generateAccToken_Resp->execution = null;
	$generateAccToken_Resp->validToken = null;	
	$generateAccToken_Resp->tokenCreated = null;
	$generateAccToken_Resp->accToken = null;

	echo json_encode($generateAccToken_Resp, JSON_NUMERIC_CHECK);
}
?>