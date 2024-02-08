<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
ignore_user_abort(false);
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["currentNewRespondent"])){

	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$currentNewRespondent = $_POST["currentNewRespondent"]; 
	/*Query string*/


	/*Prep variables*/
	$newRespondentFile = "../../Global PHP/Notifications/Notif_NewRespondent.txt";

	$dbConnection = connectToDb("vmc_csat");
	/*Prep variables*/


	/*Prep response*/
	$newRespondentNotifier_Resp = new stdClass();
	$newRespondentNotifier_Resp->validAccess = true;
	$newRespondentNotifier_Resp->serverConnection = $dbConnection->serverConnection;
	$newRespondentNotifier_Resp->validToken = null;
	$newRespondentNotifier_Resp->execution = null;	
	$newRespondentNotifier_Resp->newUpdate = false;
	$newRespondentNotifier_Resp->newRespondent = 0;

	$validToken = null;
	$execution = null;		
	$newUpdate = false;	
	$newRespondent = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($newRespondentNotifier_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$newRespondentNotifier_Resp->validToken = $validToken;

		echo json_encode($newRespondentNotifier_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$newRespondentNotifier_Resp->validToken = $validToken;

		echo json_encode($newRespondentNotifier_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
				
		while(true){
			
			if($execution = file_exists($newRespondentFile)){

				/*Get New Updates*/
				/*_Filing*/
				$readin = file($newRespondentFile);
				/*_Filing*/

				/*_Fetching*/
				$newRespondent = $detectedNewRespondent = count($readin);
				/*_Fetching*/

				/*_Checking*/
				if($detectedNewRespondent != $currentNewRespondent){

					$newUpdate = true;					
					break;
				}
				/*_Checking*/
				/*Get New Updates*/	

			}else if(!file_exists($newRespondentFile)){

				$execution = false;
				break;
			}


			/*Sleep mode*/
			sleep(1);
			/*Sleep mode*/		
		}		
			
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$newRespondentNotifier_Resp->execution = $execution;
	$newRespondentNotifier_Resp->newUpdate = $newUpdate;
	$newRespondentNotifier_Resp->newRespondent = $newRespondent;

	echo json_encode($newRespondentNotifier_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["currentNewRespondent"])){
	
	$newRespondentNotifier_Resp = new stdClass();
	$newRespondentNotifier_Resp->validAccess = false;
	$newRespondentNotifier_Resp->serverConnection = null;
	$newRespondentNotifier_Resp->validToken = null;
	$newRespondentNotifier_Resp->execution = null;	
	$newRespondentNotifier_Resp->newUpdate = null;
	$newRespondentNotifier_Resp->newRespondent = null;	

	echo json_encode($newRespondentNotifier_Resp, JSON_NUMERIC_CHECK);
}
?>