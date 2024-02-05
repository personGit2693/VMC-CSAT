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


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"]) && isset($_POST["serviceTypeId"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];
	$serviceTypeId = $_POST["serviceTypeId"];
	$clientTypeId = $_POST["clientTypeId"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getOfficeServices_Resp = new stdClass();
	$getOfficeServices_Resp->validAccess = true;
	$getOfficeServices_Resp->serverConnection = $dbConnection->serverConnection;
	$getOfficeServices_Resp->validToken = null;
	$getOfficeServices_Resp->execution = null;	
	$getOfficeServices_Resp->officeServiceDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$officeServiceDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getOfficeServices_Resp, JSON_NUMERIC_CHECK);

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
		$getOfficeServices_Resp->validToken = $validToken;

		echo json_encode($getOfficeServices_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getOfficeServices_Resp->validToken = $validToken;

		echo json_encode($getOfficeServices_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Get office services on db*/
		/*_Prep query*/
		$getOfficeService_Query = "SELECT * FROM officeservices_tab 
			WHERE office_id = :officeId 
			AND servicetype_id = :serviceTypeId
			AND clienttype_id = :clientTypeId;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getOfficeService_QueryObj = $dbConnection->selectedPdoConn->prepare($getOfficeService_Query);		
		$getOfficeService_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$getOfficeService_QueryObj->bindValue(':serviceTypeId', intval($serviceTypeId), PDO::PARAM_INT);
		$getOfficeService_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$execution = $getOfficeService_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($officeService_Assoc = $getOfficeService_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$officeServiceDetails_Array[] = $officeService_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get office services on db*/
	}

	
	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
		

	/*Return response*/
	$getOfficeServices_Resp->execution = $execution;	
	$getOfficeServices_Resp->officeServiceDetails_Array = $officeServiceDetails_Array;

	echo json_encode($getOfficeServices_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["serviceTypeId"])){
	
	$getOfficeServices_Resp = new stdClass();
	$getOfficeServices_Resp->validAccess = false;
	$getOfficeServices_Resp->serverConnection = null;
	$getOfficeServices_Resp->validToken = null;
	$getOfficeServices_Resp->execution = null;	
	$getOfficeServices_Resp->officeServiceDetails_Array = null;

	echo json_encode($getOfficeServices_Resp, JSON_NUMERIC_CHECK);
}
?>