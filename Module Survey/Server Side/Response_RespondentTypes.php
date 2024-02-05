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


if(isset($_POST["token"])){

	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getRespondentsType_Resp = new stdClass();
	$getRespondentsType_Resp->validAccess = true;
	$getRespondentsType_Resp->serverConnection = $dbConnection->serverConnection;
	$getRespondentsType_Resp->validToken = null;
	$getRespondentsType_Resp->codeDetailsBase = $_SESSION["codeDetailsBase"];	
	$getRespondentsType_Resp->execution = null;
	$getRespondentsType_Resp->respondentDetails_Array = array();	

	$validToken = null;
	$execution = null;
	$respondentDetails_Array = array(); 	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getRespondentsType_Resp, JSON_NUMERIC_CHECK);

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
		$getRespondentsType_Resp->validToken = $validToken;

		echo json_encode($getRespondentsType_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getRespondentsType_Resp->validToken = $validToken;

		echo json_encode($getRespondentsType_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*_Get respondents type on db*/
		/*_ _Prep query*/
		$getRespondentsType_Query = "SELECT * FROM respondents_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getRespondentsType_QueryObj = $dbConnection->selectedPdoConn->prepare($getRespondentsType_Query);
		$execution = $getRespondentsType_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){

			while($respondentType_Assoc = $getRespondentsType_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$respondentDetails_Array[] = $respondentType_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get respondents type on db*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getRespondentsType_Resp->execution = $execution;
	$getRespondentsType_Resp->respondentDetails_Array = $respondentDetails_Array;

	echo json_encode($getRespondentsType_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){

	$getRespondentsType_Resp = new stdClass();
	$getRespondentsType_Resp->validAccess = false;
	$getRespondentsType_Resp->serverConnection = null;
	$getRespondentsType_Resp->validToken = null;
	$getRespondentsType_Resp->codeDetailsBase = null;	
	$getRespondentsType_Resp->execution = null;
	$getRespondentsType_Resp->respondentDetails_Array = null;

	echo json_encode($getRespondentsType_Resp, JSON_NUMERIC_CHECK);
}
?>