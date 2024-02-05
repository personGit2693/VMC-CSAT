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
	$getEducAttainments_Resp = new stdClass();
	$getEducAttainments_Resp->validAccess = true;
	$getEducAttainments_Resp->serverConnection = $dbConnection->serverConnection;
	$getEducAttainments_Resp->validToken = null;
	$getEducAttainments_Resp->execution = null;	
	$getEducAttainments_Resp->educAttainmentDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$educAttainmentDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getEducAttainments_Resp, JSON_NUMERIC_CHECK);

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
		$getEducAttainments_Resp->validToken = $validToken;

		echo json_encode($getEducAttainments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getEducAttainments_Resp->validToken = $validToken;

		echo json_encode($getEducAttainments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Get religions on db*/
		/*_Prep query*/
		$getEducAttainment_Query = "SELECT * FROM educattains_tab ORDER BY educattain_number";
		/*_Prep query*/

		/*_Execute query*/
		$getEducAttainment_QueryObj = $dbConnection->selectedPdoConn->prepare($getEducAttainment_Query);
		$execution = $getEducAttainment_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){
			while($educAttainment_Assoc = $getEducAttainment_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$educAttainmentDetails_Array[] = $educAttainment_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get religions on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getEducAttainments_Resp->execution = $execution;	
	$getEducAttainments_Resp->educAttainmentDetails_Array = $educAttainmentDetails_Array;

	echo json_encode($getEducAttainments_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"])){

	$getEducAttainments_Resp = new stdClass();
	$getEducAttainments_Resp->validAccess = false;
	$getEducAttainments_Resp->serverConnection = null;
	$getEducAttainments_Resp->validToken = null;
	$getEducAttainments_Resp->execution = null;	
	$getEducAttainments_Resp->educAttainmentDetails_Array = null;

	echo json_encode($getEducAttainments_Resp, JSON_NUMERIC_CHECK);
}
?>