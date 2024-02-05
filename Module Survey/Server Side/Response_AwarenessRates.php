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


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getAwarenessRates_Resp = new stdClass();
	$getAwarenessRates_Resp->validAccess = true;
	$getAwarenessRates_Resp->serverConnection = $dbConnection->serverConnection;
	$getAwarenessRates_Resp->validToken = null;
	$getAwarenessRates_Resp->execution = null;	
	$getAwarenessRates_Resp->awarenessRateDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$awarenessRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getAwarenessRates_Resp, JSON_NUMERIC_CHECK);

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
		$getAwarenessRates_Resp->validToken = $validToken;

		echo json_encode($getAwarenessRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getAwarenessRates_Resp->validToken = $validToken;

		echo json_encode($getAwarenessRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get awareness rates on db*/
		/*_Prep query*/
		$getAwarenessRates_Query = "SELECT * FROM ccquestionsrates_tab 
			WHERE ccquestion_id = 'CC1' 
			ORDER by ccquestionsrate_numbering ASC;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getAwarenessRates_QueryObj = $dbConnection->selectedPdoConn->prepare($getAwarenessRates_Query);
		$execution = $getAwarenessRates_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($awarenessRate_Assoc = $getAwarenessRates_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$awarenessRateDetails_Array[] = $awarenessRate_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get awareness rates on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/

	
	/*Return response*/
	$getAwarenessRates_Resp->execution = $execution;
	$getAwarenessRates_Resp->awarenessRateDetails_Array = $awarenessRateDetails_Array;

	echo json_encode($getAwarenessRates_Resp);
	/*Return response*/

}else if(!isset($_POST["token"])){

	$getAwarenessRates_Resp = new stdClass();
	$getAwarenessRates_Resp->validAccess = false;
	$getAwarenessRates_Resp->serverConnection = null;
	$getAwarenessRates_Resp->validToken = null;
	$getAwarenessRates_Resp->execution = null;	
	$getAwarenessRates_Resp->awarenessRateDetails_Array = null;

	echo json_encode($getAwarenessRates_Resp);
}
?>