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


if(isset($_POST["token"])){

	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep variables*/
	$newRespondentFile = "../../Global PHP/Notifications/Notif_NewRespondent.txt";

	$dbConnection = connectToDb("vmc_csat");
	/*Prep variables*/


	/*Prep response*/
	$getNewRespondent_Resp = new stdClass();
	$getNewRespondent_Resp->validAccess = true;
	$getNewRespondent_Resp->serverConnection = $dbConnection->serverConnection;
	$getNewRespondent_Resp->validToken = null;
	$getNewRespondent_Resp->execution = null;	
	$getNewRespondent_Resp->countedNewRespondent = null;	

	$validToken = null;
	$execution = null;		
	$countedNewRespondent = null;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getNewRespondent_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$getNewRespondent_Resp->validToken = $validToken;

		echo json_encode($getNewRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getNewRespondent_Resp->validToken = $validToken;

		echo json_encode($getNewRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		if($execution = file_exists($newRespondentFile)){

			/*Count new respondent from file*/
			/*_Filing*/
			$readin = file($newRespondentFile);
			/*_Filing*/

			/*_Fetching*/
			$countedNewRespondent = count($readin);
			/*_Fetching*/
			/*Count new respondent from file*/
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getNewRespondent_Resp->execution = $execution;
	$getNewRespondent_Resp->countedNewRespondent = $countedNewRespondent;

	echo json_encode($getNewRespondent_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"])){
	
	$getNewRespondent_Resp = new stdClass();
	$getNewRespondent_Resp->validAccess = false;
	$getNewRespondent_Resp->serverConnection = null;
	$getNewRespondent_Resp->validToken = null;
	$getNewRespondent_Resp->execution = null;	
	$getNewRespondent_Resp->countedNewRespondent = null;	

	echo json_encode($getNewRespondent_Resp, JSON_NUMERIC_CHECK);
}
?>