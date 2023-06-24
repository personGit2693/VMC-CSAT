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
	$getAgeRanges_Resp = new stdClass();
	$getAgeRanges_Resp->execution = null;
	$getAgeRanges_Resp->ageRangeDetails_Array = array();
	$getAgeRanges_Resp->globalTokenResult = null;
	$getAgeRanges_Resp->serverConnection = $serverConnection;

	$execution = null;
	$ageRangeDetails_Array = array(); 
	$globalTokenResult = null;
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getAgeRanges_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getAgeRanges_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getAgeRanges_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getAgeRanges_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getAgeRanges_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get age ranges on db*/
		/*_ _Prep query*/
		$getAgeRangesType_Query = "SELECT * FROM ageranges_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getAgeRangesType_QueryObj = $vmcCsat_Conn->prepare($getAgeRangesType_Query);
		$execution = $getAgeRangesType_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($ageRange_Assoc = $getAgeRangesType_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$ageRangeDetails_Array[] = $ageRange_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get age ranges on db*/
		

		/*_Return response*/
		$getAgeRanges_Resp->execution = $execution;
		$getAgeRanges_Resp->globalTokenResult = $globalTokenResult;
		$getAgeRanges_Resp->ageRangeDetails_Array = $ageRangeDetails_Array;

		echo json_encode($getAgeRanges_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getAgeRanges_Resp = new stdClass();
	$getAgeRanges_Resp->execution = null;
	$getAgeRanges_Resp->globalTokenResult = null;
	$getAgeRanges_Resp->ageRangeDetails_Array = array();

	echo json_encode($getAgeRanges_Resp);
}
?>