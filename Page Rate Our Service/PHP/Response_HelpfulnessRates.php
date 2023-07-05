<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep response*/
	$getHelpfulnessRates_Resp = new stdClass();
	$getHelpfulnessRates_Resp->execution = null;
	$getHelpfulnessRates_Resp->globalTokenResult = null;
	$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = array();
	$getHelpfulnessRates_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$helpfulnessRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getHelpfulnessRates_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getHelpfulnessRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getHelpfulnessRates_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getHelpfulnessRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getHelpfulnessRates_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get helpfulness rates on db*/
		/*_ _Prep query*/
		$getHelpfulnessRates_Query = "SELECT * FROM ccquestionsrates_tab WHERE ccquestion_id = 'CC3' AND NOT ccquestionsrate_id = 13;";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getHelpfulnessRates_QueryObj = $vmcCsat_Conn->prepare($getHelpfulnessRates_Query);
		$execution = $getHelpfulnessRates_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($helpfulnessRate_Assoc = $getHelpfulnessRates_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$helpfulnessRateDetails_Array[] = $helpfulnessRate_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get helpfulness rates on db*/
		

		/*_Return response*/
		$getHelpfulnessRates_Resp->execution = $execution;
		$getHelpfulnessRates_Resp->globalTokenResult = $globalTokenResult;
		$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = $helpfulnessRateDetails_Array;

		echo json_encode($getHelpfulnessRates_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getHelpfulnessRates_Resp = new stdClass();
	$getHelpfulnessRates_Resp->execution = null;
	$getHelpfulnessRates_Resp->globalTokenResult = null;
	$getHelpfulnessRates_Resp->helpfulnessRateDetails_Array = array();

	echo json_encode($getHelpfulnessRates_Resp);
}
?>