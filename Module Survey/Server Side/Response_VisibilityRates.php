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
	$getVisibilityRates_Resp = new stdClass();
	$getVisibilityRates_Resp->validAccess = true;
	$getVisibilityRates_Resp->serverConnection = $dbConnection->serverConnection;
	$getVisibilityRates_Resp->validToken = null;
	$getVisibilityRates_Resp->execution = null;
	$getVisibilityRates_Resp->visibilityRateDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$visibilityRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getVisibilityRates_Resp, JSON_NUMERIC_CHECK);

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
		$getVisibilityRates_Resp->validToken = $validToken;

		echo json_encode($getVisibilityRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getVisibilityRates_Resp->validToken = $validToken;

		echo json_encode($getVisibilityRates_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get visibility rates on db*/
		/*_Prep query*/
		$getVisibilityRates_Query = "SELECT * FROM ccquestionsrates_tab 
			WHERE ccquestion_id = 'CC2' 
			AND NOT ccquestionsrate_id = 12;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getVisibilityRates_QueryObj = $dbConnection->selectedPdoConn->prepare($getVisibilityRates_Query);
		$execution = $getVisibilityRates_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($visibilityRate_Assoc = $getVisibilityRates_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$visibilityRateDetails_Array[] = $visibilityRate_Assoc;
			}
		}
		/*_Fetching result*/
		/*_Get visibility rates on db*/
				
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/

	
	/*Return response*/
	$getVisibilityRates_Resp->execution = $execution;
	$getVisibilityRates_Resp->visibilityRateDetails_Array = $visibilityRateDetails_Array;

	echo json_encode($getVisibilityRates_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"])){

	$getVisibilityRates_Resp->validAccess = false;
	$getVisibilityRates_Resp->serverConnection = null;
	$getVisibilityRates_Resp->validToken = null;
	$getVisibilityRates_Resp->execution = null;
	$getVisibilityRates_Resp->visibilityRateDetails_Array = null;

	echo json_encode($getVisibilityRates_Resp, JSON_NUMERIC_CHECK);
}
?>