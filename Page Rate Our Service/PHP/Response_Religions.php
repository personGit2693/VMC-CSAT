<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["dropdownReligionSearch"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$dropdownReligionSearch = $_POST["dropdownReligionSearch"];
	/*Query string*/


	/*Prep response*/
	$getReligions_Resp = new stdClass();
	$getReligions_Resp->execution = null;
	$getReligions_Resp->globalTokenResult = null;
	$getReligions_Resp->religionDetails_Array = array();
	$getReligions_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$religionDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getReligions_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getReligions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getReligions_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getReligions_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getReligions_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get religions on db*/
		/*_ _Prep query*/
		$getReligions_Query = "SELECT * FROM religions_tab";

		if(!empty($dropdownReligionSearch)){
			$getReligions_Query .= " WHERE religion_name LIKE :dropdownReligionSearch";
		}
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getReligions_QueryObj = $vmcCsat_Conn->prepare($getReligions_Query);

		if(!empty($dropdownReligionSearch)){
			$getReligions_QueryObj->bindValue(':dropdownReligionSearch', '%'.$dropdownReligionSearch.'%', PDO::PARAM_STR);
		}
		
		$execution = $getReligions_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($religion_Assoc = $getReligions_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$religionDetails_Array[] = $religion_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get religions on db*/
		

		/*_Return response*/
		$getReligions_Resp->execution = $execution;
		$getReligions_Resp->globalTokenResult = $globalTokenResult;
		$getReligions_Resp->religionDetails_Array = $religionDetails_Array;

		echo json_encode($getReligions_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["dropdownReligionSearch"])){
	$getReligions_Resp = new stdClass();
	$getReligions_Resp->execution = null;
	$getReligions_Resp->globalTokenResult = null;
	$getReligions_Resp->religionDetails_Array = array();

	echo json_encode($getReligions_Resp);
}
?>