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
	$getFreqVisits_Resp = new stdClass();
	$getFreqVisits_Resp->validAccess = true;
	$getFreqVisits_Resp->serverConnection = $dbConnection->serverConnection;
	$getFreqVisits_Resp->validToken = null;
	$getFreqVisits_Resp->execution = null;	
	$getFreqVisits_Resp->freqVisitDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$freqVisitDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getFreqVisits_Resp, JSON_NUMERIC_CHECK);

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
		$getFreqVisits_Resp->validToken = $validToken;

		echo json_encode($getFreqVisits_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getFreqVisits_Resp->validToken = $validToken;

		echo json_encode($getFreqVisits_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Office Services on db*/
		/*_Prep query*/
		$getFreqVisit_Query = "SELECT * FROM visityears_tab;";
		/*_Prep query*/

		/*_Execute query*/
		$getFreqVisit_QueryObj = $dbConnection->selectedPdoConn->prepare($getFreqVisit_Query);				
		$execution = $getFreqVisit_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($freqVisit_Assoc = $getFreqVisit_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$freqVisitDetails_Array[] = $freqVisit_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get Office Services on db*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getFreqVisits_Resp->execution = $execution;
	$getFreqVisits_Resp->freqVisitDetails_Array = $freqVisitDetails_Array;

	echo json_encode($getFreqVisits_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){

	$getFreqVisits_Resp->validAccess = false;
	$getFreqVisits_Resp->serverConnection = null;
	$getFreqVisits_Resp->validToken = null;
	$getFreqVisits_Resp->execution = null;	
	$getFreqVisits_Resp->freqVisitDetails_Array = null;

	echo json_encode($getFreqVisits_Resp, JSON_NUMERIC_CHECK);
}
?>