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
	$getVisibilityRates_Resp = new stdClass();
	$getVisibilityRates_Resp->execution = null;
	$getVisibilityRates_Resp->globalTokenResult = null;
	$getVisibilityRates_Resp->visibilityRateDetails_Array = array();
	$getVisibilityRates_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$visibilityRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getVisibilityRates_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getVisibilityRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getVisibilityRates_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getVisibilityRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getVisibilityRates_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get visibility rates on db*/
		/*_ _Prep query*/
		$getVisibilityRates_Query = "SELECT * FROM ccquestionsrates_tab WHERE ccquestion_id = 'CC2' AND NOT ccquestionsrate_id = 12;";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getVisibilityRates_QueryObj = $vmcCsat_Conn->prepare($getVisibilityRates_Query);
		$execution = $getVisibilityRates_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($visibilityRate_Assoc = $getVisibilityRates_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$visibilityRateDetails_Array[] = $visibilityRate_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get visibility rates on db*/
		

		/*_Return response*/
		$getVisibilityRates_Resp->execution = $execution;
		$getVisibilityRates_Resp->globalTokenResult = $globalTokenResult;
		$getVisibilityRates_Resp->visibilityRateDetails_Array = $visibilityRateDetails_Array;

		echo json_encode($getVisibilityRates_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getVisibilityRates_Resp = new stdClass();
	$getVisibilityRates_Resp->execution = null;
	$getVisibilityRates_Resp->globalTokenResult = null;
	$getVisibilityRates_Resp->visibilityRateDetails_Array = array();

	echo json_encode($getVisibilityRates_Resp);
}
?>