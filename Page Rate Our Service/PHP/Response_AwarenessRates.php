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
	$getAwarenessRates_Resp = new stdClass();
	$getAwarenessRates_Resp->execution = null;
	$getAwarenessRates_Resp->globalTokenResult = null;
	$getAwarenessRates_Resp->awarenessRateDetails_Array = array();
	$getAwarenessRates_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$awarenessRateDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getAwarenessRates_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getAwarenessRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getAwarenessRates_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getAwarenessRates_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getAwarenessRates_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get awareness rates on db*/
		/*_ _Prep query*/
		$getAwarenessRates_Query = "SELECT * FROM ccquestionsrates_tab WHERE ccquestion_id = 'CC1';";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getAwarenessRates_QueryObj = $vmcCsat_Conn->prepare($getAwarenessRates_Query);
		$execution = $getAwarenessRates_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($awarenessRate_Assoc = $getAwarenessRates_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$awarenessRateDetails_Array[] = $awarenessRate_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get awareness rates on db*/
		

		/*_Return response*/
		$getAwarenessRates_Resp->execution = $execution;
		$getAwarenessRates_Resp->globalTokenResult = $globalTokenResult;
		$getAwarenessRates_Resp->awarenessRateDetails_Array = $awarenessRateDetails_Array;

		echo json_encode($getAwarenessRates_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getAwarenessRates_Resp = new stdClass();
	$getAwarenessRates_Resp->execution = null;
	$getAwarenessRates_Resp->globalTokenResult = null;
	$getAwarenessRates_Resp->awarenessRateDetails_Array = array();

	echo json_encode($getAwarenessRates_Resp);
}
?>