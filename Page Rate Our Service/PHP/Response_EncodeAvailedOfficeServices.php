<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["availedOfficeServices_Base"]) && isset($_POST["clientResponseRef"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$availedOfficeServices_Array = json_decode(base64_decode($_POST["availedOfficeServices_Base"]));
	/*Query string*/


	/*Pre variables*/
	$singleExecution = false;
	/*Pre variables*/


	/*Prep response*/
	$encodeAvailedOfficeServices_Resp = new stdClass();
	$encodeAvailedOfficeServices_Resp->execution_Array = array();
	$encodeAvailedOfficeServices_Resp->globalTokenResult = null;
	$encodeAvailedOfficeServices_Resp->rowAffected_Array = array();
	$encodeAvailedOfficeServices_Resp->serverConnection = $serverConnection;

	$execution_Array = array();	
	$globalTokenResult = null;
	$rowAffected_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($encodeAvailedOfficeServices_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$encodeAvailedOfficeServices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeAvailedOfficeServices_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$encodeAvailedOfficeServices_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeAvailedOfficeServices_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode availed office services on db*/
		for($index=0; $index<count($availedOfficeServices_Array); $index++){
			$availedOfficeServiceId = $availedOfficeServices_Array[$index];

			/*_ _Prep query*/
			$encodeAvailedOfficeServices_Query = "INSERT INTO serviceresponses_tab (clientresponse_reference, 
					officeservice_id 				
				) 
				VALUES (:clientResponseRef,
					:availedOfficeServiceId				
				);
			";
			/*_ _Prep query*/

			/*_ _Execute query*/
			$encodeAvailedOfficeServices_QueryObj = $vmcCsat_Conn->prepare($encodeAvailedOfficeServices_Query);
			$encodeAvailedOfficeServices_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeAvailedOfficeServices_QueryObj->bindValue(':availedOfficeServiceId', intval($availedOfficeServiceId), PDO::PARAM_INT);
			$execution_Array[] = $singleExecution = $encodeAvailedOfficeServices_QueryObj->execute();
			/*_ _Execute query*/

			/*_ _Fetching result*/
			if($singleExecution){
				$rowAffected_Array[] = $encodeAvailedOfficeServices_QueryObj->rowCount();
			}
			/*_ _Fetching result*/
		}								
		/*_Encode availed office services on db*/
		

		/*_Return response*/
		$encodeAvailedOfficeServices_Resp->execution_Array = $execution_Array;
		$encodeAvailedOfficeServices_Resp->globalTokenResult = $globalTokenResult;
		$encodeAvailedOfficeServices_Resp->rowAffected_Array = $rowAffected_Array;

		echo json_encode($encodeAvailedOfficeServices_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["availedOfficeServices_Base"]) || !isset($_POST["clientResponseRef"])){
	$encodeAvailedOfficeServices_Resp = new stdClass();
	$encodeAvailedOfficeServices_Resp->execution_Array = array();
	$encodeAvailedOfficeServices_Resp->globalTokenResult = null;
	$encodeAvailedOfficeServices_Resp->rowAffected_Array = array();

	echo json_encode($encodeAvailedOfficeServices_Resp);
}
?>