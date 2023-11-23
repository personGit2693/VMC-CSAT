<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["searchPointOfEntry"]) && isset($_POST["startIn"]) && isset($_POST["maxDisplayRow"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$searchPointOfEntry = $_POST["searchPointOfEntry"];
	$startIn = $_POST["startIn"];
	$maxDisplayRow = $_POST["maxDisplayRow"];
	/*Query string*/


	/*Prep response*/
	$getPointOfEntry_Resp = new stdClass();
	$getPointOfEntry_Resp->execution = null;
	$getPointOfEntry_Resp->globalTokenResult = null;
	$getPointOfEntry_Resp->pointOfEntry_Array = array();
	$getPointOfEntry_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$pointOfEntry_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getPointOfEntry_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getPointOfEntry_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Point Of Entry*/
		/*_Prep query*/
		$getPointOfEntry_Query = "SELECT * FROM offices_tab";

		if(!empty($searchPointOfEntry)){
			$getPointOfEntry_Query .= " WHERE office_value LIKE :searchPointOfEntry 
				OR office_abbre LIKE :searchPointOfEntry 				
			";
		}

		$getPointOfEntry_Query .= " ORDER BY office_value LIMIT :startIn, :maxDisplayRow;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getPointOfEntry_QueryObj = $vmcCsat_Conn->prepare($getPointOfEntry_Query);		

		if(!empty($searchPointOfEntry)){
			$getPointOfEntry_QueryObj->bindValue(':searchPointOfEntry', '%'.$searchPointOfEntry.'%', PDO::PARAM_STR);			
		}
		$getPointOfEntry_QueryObj->bindValue(':startIn', intval($startIn), PDO::PARAM_INT);
		$getPointOfEntry_QueryObj->bindValue(':maxDisplayRow', intval($maxDisplayRow), PDO::PARAM_INT);

		$execution = $getPointOfEntry_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			while($pointOfEntry_Assoc = $getPointOfEntry_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$pointOfEntry_Array[] = $pointOfEntry_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Point Of Entry*/
		

		/*_Return response*/
		$getPointOfEntry_Resp->execution = $execution;
		$getPointOfEntry_Resp->globalTokenResult = $globalTokenResult;
		$getPointOfEntry_Resp->pointOfEntry_Array = $pointOfEntry_Array;

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["searchPointOfEntry"]) || !isset($_POST["startIn"]) || !isset($_POST["maxDisplayRow"])){
	$getPointOfEntry_Resp = new stdClass();
	$getPointOfEntry_Resp->execution = null;
	$getPointOfEntry_Resp->globalTokenResult = null;
	$getPointOfEntry_Resp->pointOfEntry_Array = array();

	echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
}
?>