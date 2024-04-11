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

	$clientIp = $_SERVER["REMOTE_ADDR"];
	/*Prep variables*/


	/*Prep response*/
	$encodeNewRespondent_Resp = new stdClass();
	$encodeNewRespondent_Resp->validAccess = true;
	$encodeNewRespondent_Resp->serverConnection = $dbConnection->serverConnection;
	$encodeNewRespondent_Resp->validToken = null;
	$encodeNewRespondent_Resp->execution = null;	
	$encodeNewRespondent_Resp->dataUpdated = 0;
	$encodeNewRespondent_Resp->endPoint = "./Page_SuccessRatingSubmit.php?token=".$token;	

	$validToken = null;
	$execution = null;		
	$dataUpdated = 0;	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($encodeNewRespondent_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$encodeNewRespondent_Resp->validToken = $validToken;

		echo json_encode($encodeNewRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$encodeNewRespondent_Resp->validToken = $validToken;

		echo json_encode($encodeNewRespondent_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		if($execution = file_exists($newRespondentFile)){

			/*Encode new Respondent*/
			$fileOpen = fopen($newRespondentFile, 'a');
			$dataUpdated = fwrite($fileOpen, $clientIp."\r\n");
			fclose($fileOpen);
			/*Encode new Respondent*/


			/*Destroy ESRS bypass*/
			unset($_SESSION["unitAbbre"]);
			/*Destroy ESRS bypass*/
		}
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$encodeNewRespondent_Resp->execution = $execution;
	$encodeNewRespondent_Resp->dataUpdated = $dataUpdated;

	echo json_encode($encodeNewRespondent_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){
	
	$encodeNewRespondent_Resp = new stdClass();
	$encodeNewRespondent_Resp->validAccess = false;
	$encodeNewRespondent_Resp->serverConnection = null;
	$encodeNewRespondent_Resp->execution = null;	
	$encodeNewRespondent_Resp->validToken = null;
	$encodeNewRespondent_Resp->dataUpdated = null;
	$encodeNewRespondent_Resp->endPoint = null;	

	echo json_encode($encodeNewRespondent_Resp, JSON_NUMERIC_CHECK);
}
?>