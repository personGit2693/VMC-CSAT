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
	/*Prep Variables*/


	/*Prep response*/
	$getIdentifier_Resp = new stdClass();
	$getIdentifier_Resp->validAccess = true;
	$getIdentifier_Resp->serverConnection = $dbConnection->serverConnection;
	$getIdentifier_Resp->validToken = null;
	$getIdentifier_Resp->execution = null;
	$getIdentifier_Resp->accountDetails_Obj = new stdClass();
	$getIdentifier_Resp->found = 0;	

	$validToken = null;
	$execution = null;	
	$accountDetails_Obj = new stdClass();	
	$found = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getIdentifier_Resp, JSON_NUMERIC_CHECK);

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
		$getIdentifier_Resp->validToken = $validToken;

		echo json_encode($getIdentifier_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getIdentifier_Resp->validToken = $validToken;

		echo json_encode($getIdentifier_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Identifier*/
		/*_Prep query*/
		$getIdentifier_Query = "SELECT account_number,
			account_identifier,
			IFNULL(office_id, 0) AS 'office_id',
			division_id,
			account_active			
			FROM accounts_tab 
			WHERE account_number = :usernInput;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getIdentifier_QueryObj = $dbConnection->selectedPdoConn->prepare($getIdentifier_Query);		
		$getIdentifier_QueryObj->bindValue(':usernInput', $usernInput, PDO::PARAM_STR);
		$execution = $getIdentifier_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			if($identifier_Assoc = $getIdentifier_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$found = $getIdentifier_QueryObj->rowCount();

				if($found !== 0){

					$accountDetails_Obj = $identifier_Assoc;
				}
			}
		}
		/*_Fetching*/		
		/*Get Identifier*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/

	
	/*Return response*/
	$getIdentifier_Resp->execution = $execution;	
	$getIdentifier_Resp->accountDetails_Obj = $accountDetails_Obj;	
	$getIdentifier_Resp->found = $found;

	echo json_encode($getIdentifier_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["usernInput"])){
	
	$getIdentifier_Resp = new stdClass();
	$getIdentifier_Resp->validAccess = false;
	$getIdentifier_Resp->serverConnection = null;
	$getIdentifier_Resp->validToken = null;
	$getIdentifier_Resp->execution = null;
	$getIdentifier_Resp->accountDetails_Obj = null;
	$getIdentifier_Resp->found = null;

	echo json_encode($getIdentifier_Resp, JSON_NUMERIC_CHECK);
}
?>