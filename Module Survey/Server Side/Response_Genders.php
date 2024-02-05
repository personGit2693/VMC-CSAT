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
	$getGenders_Resp = new stdClass();
	$getGenders_Resp->validAccess = true;
	$getGenders_Resp->serverConnection = $dbConnection->serverConnection;
	$getGenders_Resp->validToken = null;
	$getGenders_Resp->execution = null;
	$getGenders_Resp->genderDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$genderDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getGenders_Resp, JSON_NUMERIC_CHECK);

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
		$getGenders_Resp->validToken = $validToken;

		echo json_encode($getGenders_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getGenders_Resp->validToken = $validToken;

		echo json_encode($getGenders_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get genders on db*/
		/*_Prep query*/
		$getGenders_Query = "SELECT * FROM genders_tab";
		/*_Prep query*/

		/*_Execute query*/
		$getGenders_QueryObj = $dbConnection->selectedPdoConn->prepare($getGenders_Query);
		$execution = $getGenders_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){
			while($gender_Assoc = $getGenders_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$genderDetails_Array[] = $gender_Assoc;
			}
		}
		/*_Fetching result*/
		/*_Get genders on db*/

	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$getGenders_Resp->execution = $execution;		
	$getGenders_Resp->genderDetails_Array = $genderDetails_Array;

	echo json_encode($getGenders_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"])){
	
	$getGenders_Resp = new stdClass();
	$getGenders_Resp->validAccess = true;
	$getGenders_Resp->serverConnection = $dbConnection->serverConnection;
	$getGenders_Resp->validToken = null;
	$getGenders_Resp->execution = null;
	$getGenders_Resp->genderDetails_Array = array();

	echo json_encode($getGenders_Resp, JSON_NUMERIC_CHECK);
}
?>