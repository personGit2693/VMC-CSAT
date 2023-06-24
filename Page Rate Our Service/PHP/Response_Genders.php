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
	$getGenders_Resp = new stdClass();
	$getGenders_Resp->execution = null;
	$getGenders_Resp->globalTokenResult = null;
	$getGenders_Resp->genderDetails_Array = array();
	$getGenders_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$genderDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getGenders_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getGenders_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getGenders_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getGenders_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getGenders_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get genders on db*/
		/*_ _Prep query*/
		$getGenders_Query = "SELECT * FROM genders_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getGenders_QueryObj = $vmcCsat_Conn->prepare($getGenders_Query);
		$execution = $getGenders_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($gender_Assoc = $getGenders_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$genderDetails_Array[] = $gender_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get genders on db*/
		

		/*_Return response*/
		$getGenders_Resp->execution = $execution;
		$getGenders_Resp->globalTokenResult = $globalTokenResult;
		$getGenders_Resp->genderDetails_Array = $genderDetails_Array;

		echo json_encode($getGenders_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getGenders_Resp = new stdClass();
	$getGenders_Resp->execution = null;
	$getGenders_Resp->globalTokenResult = null;
	$getGenders_Resp->genderDetails_Array = array();

	echo json_encode($getGenders_Resp);
}
?>