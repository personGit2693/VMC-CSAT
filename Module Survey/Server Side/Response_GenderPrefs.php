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
	$getGenderPrefs_Resp = new stdClass();
	$getGenderPrefs_Resp->validAccess = true;
	$getGenderPrefs_Resp->serverConnection = $dbConnection->serverConnection;
	$getGenderPrefs_Resp->validToken = null;
	$getGenderPrefs_Resp->execution = null;
	$getGenderPrefs_Resp->genderPrefDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$genderPrefDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getGenderPrefs_Resp, JSON_NUMERIC_CHECK);

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
		$getGenderPrefs_Resp->validToken = $validToken;

		echo json_encode($getGenderPrefs_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getGenderPrefs_Resp->validToken = $validToken;

		echo json_encode($getGenderPrefs_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Get gender preferences on db*/
		/*_Prep query*/
		$getGenderPrefs_Query = "SELECT * FROM genderpreferences_tab";
		/*_Prep query*/

		/*_Execute query*/
		$getGenderPrefs_QueryObj = $dbConnection->selectedPdoConn->prepare($getGenderPrefs_Query);
		$execution = $getGenderPrefs_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($genderPref_Assoc = $getGenderPrefs_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$genderPrefDetails_Array[] = $genderPref_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get gender preferences on db*/
	}
		

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getGenderPrefs_Resp->execution = $execution;
	$getGenderPrefs_Resp->genderPrefDetails_Array = $genderPrefDetails_Array;

	echo json_encode($getGenderPrefs_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
}else if(!isset($_POST["token"])){
	
	$getGenderPrefs_Resp->validAccess = false;
	$getGenderPrefs_Resp->serverConnection = null;
	$getGenderPrefs_Resp->validToken = null;
	$getGenderPrefs_Resp->execution = null;
	$getGenderPrefs_Resp->genderPrefDetails_Array = null;

	echo json_encode($getGenderPrefs_Resp, JSON_NUMERIC_CHECK);
}
?>