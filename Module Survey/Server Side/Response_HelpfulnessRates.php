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
	

	/*Required files*/

	/*Required files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getHelpfulnessRates_Resp = new stdClass();
	$getHelpfulnessRates_Resp->validAccess = true;
	$getHelpfulnessRates_Resp->serverConnection = $dbConnection->serverConnection;
	$getHelpfulnessRates_Resp->validToken = null;
	$getHelpfulnessRates_Resp->execution = null;
	$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$helpfulnessRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getHelpfulnessRates_Resp, JSON_NUMERIC_CHECK);

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
		$getHelpfulnessRates_Resp->validToken = $validToken;

		echo json_encode($getHelpfulnessRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getHelpfulnessRates_Resp->validToken = $validToken;

		echo json_encode($getHelpfulnessRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get helpfulness rates on db*/
		/*_Prep query*/
		$getHelpfulnessRates_Query = "SELECT * FROM ccquestionsrates_tab 
			WHERE ccquestion_id = 'CC3' 
			AND NOT ccquestionsrate_id = 13;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getHelpfulnessRates_QueryObj = $dbConnection->selectedPdoConn->prepare($getHelpfulnessRates_Query);
		$execution = $getHelpfulnessRates_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($helpfulnessRate_Assoc = $getHelpfulnessRates_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$helpfulnessRateDetails_Array[] = $helpfulnessRate_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get helpfulness rates on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$getHelpfulnessRates_Resp->execution = $execution;
	$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = $helpfulnessRateDetails_Array;

	echo json_encode($getHelpfulnessRates_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){
	
	$getHelpfulnessRates_Resp = new stdClass();
	$getHelpfulnessRates_Resp->validAccess = false;
	$getHelpfulnessRates_Resp->serverConnection = $dbConnection->serverConnection;
	$getHelpfulnessRates_Resp->validToken = null;
	$getHelpfulnessRates_Resp->execution = null;
	$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = null;

	echo json_encode($getHelpfulnessRates_Resp, JSON_NUMERIC_CHECK);
}
?>