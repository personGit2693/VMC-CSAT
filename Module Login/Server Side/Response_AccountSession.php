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


if(isset($_POST["token"]) && isset($_POST["account_number"]) && isset($_POST["office_id"]) && isset($_POST["account_identifier"]) && isset($_POST["account_active"]) && isset($_POST["accToken"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$account_number = $_POST["account_number"];
	$office_id = $_POST["office_id"];
	$account_identifier = $_POST["account_identifier"];
	$account_active = $_POST["account_active"];
	$accToken = $_POST["accToken"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$accountSession_Resp = new stdClass();
	$accountSession_Resp->validAccess = true;
	$accountSession_Resp->serverConnection = $dbConnection->serverConnection;
	$accountSession_Resp->validToken = null;		
	$accountSession_Resp->execution = null;
	$accountSession_Resp->endpoint = "../../Module Office/Pages/Page_RatingMonitoring.php";

	$validToken = null;	
	$execution = null;		
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($accountSession_Resp, JSON_NUMERIC_CHECK);

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
		$accountSession_Resp->validToken = $validToken;

		echo json_encode($accountSession_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$accountSession_Resp->validToken = $validToken;

		echo json_encode($accountSession_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Create Session*/
		$_SESSION["account_number"] = $account_number;
		$_SESSION["office_id"] = $office_id;
		$_SESSION["account_identifier"] = $account_identifier;
		$_SESSION["account_active"] = $account_active;
		$_SESSION["accToken"] = $accToken;

		if($_SESSION["account_number"] != "" && isset($_SESSION["account_number"]) && $_SESSION["office_id"] != "" && isset($_SESSION["office_id"]) && $_SESSION["account_identifier"] != "" && isset($_SESSION["account_identifier"]) && $_SESSION["account_active"] != "" && isset($_SESSION["account_active"]) && $_SESSION["accToken"] != "" && isset($_SESSION["accToken"])){

			$execution = true;
		}
		/*Create Session*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$accountSession_Resp->execution = $execution;				

	echo json_encode($accountSession_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["account_number"]) || !isset($_POST["office_id"]) || !isset($_POST["account_identifier"]) || !isset($_POST["account_active"]) || !isset($_POST["accToken"])){
	
	$accountSession_Resp = new stdClass();
	$accountSession_Resp->validAccess = false;
	$accountSession_Resp->serverConnection = null;
	$accountSession_Resp->validToken = null;		
	$accountSession_Resp->execution = null;
	$accountSession_Resp->endpoint = null;

	echo json_encode($accountSession_Resp, JSON_NUMERIC_CHECK);
}
?>