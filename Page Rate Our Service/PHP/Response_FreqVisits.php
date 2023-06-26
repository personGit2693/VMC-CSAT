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
	$getFreqVisits_Resp = new stdClass();
	$getFreqVisits_Resp->execution = null;
	$getFreqVisits_Resp->globalTokenResult = null;
	$getFreqVisits_Resp->freqVisitDetails_Array = array();
	$getFreqVisits_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$freqVisitDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getFreqVisits_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getFreqVisits_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getFreqVisits_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getFreqVisits_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getFreqVisits_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get Office Services on db*/
		/*_ _Prep query*/
		$getFreqVisit_Query = "SELECT * FROM visityears_tab;";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getFreqVisit_QueryObj = $vmcCsat_Conn->prepare($getFreqVisit_Query);				
		$execution = $getFreqVisit_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($freqVisit_Assoc = $getFreqVisit_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$freqVisitDetails_Array[] = $freqVisit_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get Office Services on db*/
		

		/*_Return response*/
		$getFreqVisits_Resp->execution = $execution;
		$getFreqVisits_Resp->globalTokenResult = $globalTokenResult;
		$getFreqVisits_Resp->freqVisitDetails_Array = $freqVisitDetails_Array;

		echo json_encode($getFreqVisits_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getFreqVisits_Resp = new stdClass();
	$getFreqVisits_Resp->execution = null;
	$getFreqVisits_Resp->globalTokenResult = null;
	$getFreqVisits_Resp->freqVisitDetails_Array = array();

	echo json_encode($getFreqVisits_Resp);
}
?>