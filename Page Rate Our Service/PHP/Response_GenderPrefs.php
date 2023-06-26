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
	$getGenderPrefs_Resp = new stdClass();
	$getGenderPrefs_Resp->execution = null;
	$getGenderPrefs_Resp->globalTokenResult = null;
	$getGenderPrefs_Resp->genderPrefDetails_Array = array();
	$getGenderPrefs_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$genderPrefDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getGenderPrefs_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getGenderPrefs_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getGenderPrefs_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getGenderPrefs_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getGenderPrefs_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get gender preferences on db*/
		/*_ _Prep query*/
		$getGenderPrefs_Query = "SELECT * FROM genderpreferences_tab";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getGenderPrefs_QueryObj = $vmcCsat_Conn->prepare($getGenderPrefs_Query);
		$execution = $getGenderPrefs_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($genderPref_Assoc = $getGenderPrefs_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$genderPrefDetails_Array[] = $genderPref_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get gender preferences on db*/
		

		/*_Return response*/
		$getGenderPrefs_Resp->execution = $execution;
		$getGenderPrefs_Resp->globalTokenResult = $globalTokenResult;
		$getGenderPrefs_Resp->genderPrefDetails_Array = $genderPrefDetails_Array;

		echo json_encode($getGenderPrefs_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getGenderPrefs_Resp = new stdClass();
	$getGenderPrefs_Resp->execution = null;
	$getGenderPrefs_Resp->globalTokenResult = null;
	$getGenderPrefs_Resp->genderPrefDetails_Array = array();

	echo json_encode($getGenderPrefs_Resp);
}
?>