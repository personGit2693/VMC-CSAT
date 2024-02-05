<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/GenerateRateToken_Class.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
require_once "../../Global PHP/CodeDetails_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["inputCode"])){
	
	/*Required Files*/
	
	/*Required Files*/

	
	/*Query String*/
	$inputCode = $_POST["inputCode"];
	$token = $_POST["token"];
	/*Query String*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	$endPoint = "./Module Survey/Pages/Page_RateService.php";
	/*Prep Variables*/


	/*Prep Response*/
	$genRateToken_Resp = new stdClass();
	$genRateToken_Resp->validAccess = true;
	$genRateToken_Resp->serverConnection = $dbConnection->serverConnection;
	$genRateToken_Resp->endPoint = $endPoint;
	$genRateToken_Resp->validToken = null;
	$genRateToken_Resp->execution = null;
	$genRateToken_Resp->newRateToken = null;
	$genRateToken_Resp->rateToken = null;
	$genRateToken_Resp->codeDetails = new stdClass();		
	
	$validToken = null;
	$execution = null;
	$newRateToken = null;
	$rateToken = null;
	$codeDetails = new stdClass();
	/*Prep Response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);

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
		$genRateToken_Resp->validToken = $validToken;

		echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$genRateToken_Resp->validToken = $validToken;

		echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*_Code validation*/
		$getCodeDetails_Obj = getCodeDetails($dbConnection->selectedPdoConn, $inputCode);
		$execution = $getCodeDetails_Obj->execution;
		$officecode_code = $getCodeDetails_Obj->details_Assoc["officecode_code"];

		if($execution != true){

			$genRateToken_Resp->execution = $execution;
			echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);

			/*_Disconnect*/
			$dbConnection = null;
			/*_Disconnect*/

			return;
		}		
		/*_Code validation*/


		/*_Generate Rate token*/
		$genRateTok_Resp = generateRateToken($dbConnection->selectedPdoConn, $officecode_code);
		$execution = $genRateTok_Resp->genRateTok_Exec;		
		$newRateToken = $genRateTok_Resp->genRateTok_Count;
		$rateToken = $genRateTok_Resp->genRateTok_Val;

		if($execution != true){

			$genRateToken_Resp->execution = $execution;
			echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);

			/*_Disconnect*/
			$dbConnection = null;
			/*_Disconnect*/

			return;
		}		
		/*_Generate Rate token*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$genRateToken_Resp->execution = $execution;
	$genRateToken_Resp->newRateToken = $newRateToken;
	$genRateToken_Resp->rateToken = $rateToken;
	$genRateToken_Resp->codeDetails = $getCodeDetails_Obj->details_Assoc;	

	echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["inputCode"])){	
	
	/*Return response*/
	$genRateToken_Resp = new stdClass();
	$genRateToken_Resp->validAccess = false;
	$genRateToken_Resp->serverConnection = null;
	$genRateToken_Resp->validToken = null;
	$genRateToken_Resp->endPoint = null;
	$genRateToken_Resp->execution = null;
	$genRateToken_Resp->newRateToken = null;
	$genRateToken_Resp->codeDetails = null;
	$genRateToken_Resp->rateToken = null;

	echo json_encode($genRateToken_Resp, JSON_NUMERIC_CHECK);	
	/*Return response*/
}
?>