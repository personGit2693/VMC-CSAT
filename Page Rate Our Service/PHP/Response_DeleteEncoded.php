<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && $_POST["clientResponseRef"]){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	/*Query string*/


	/*Prep response*/
	$deleteEncoded_Resp = new stdClass();
	$deleteEncoded_Resp->execution = null;
	$deleteEncoded_Resp->globalTokenResult = null;
	$deleteEncoded_Resp->rowAffected = 0;
	$deleteEncoded_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($deleteEncoded_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$deleteEncoded_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($deleteEncoded_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$deleteEncoded_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($deleteEncoded_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode Respondent Details on db*/		
		/*_ _Prep query*/
		$deleteEncoded_Query = "DELETE FROM clientresponses_tab WHERE :clientResponseRef;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$deleteEncoded_QueryObj = $vmcCsat_Conn->prepare($deleteEncoded_Query);
		$deleteEncoded_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
		$execution = $deleteEncoded_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			$rowAffected = $deleteEncoded_QueryObj->rowCount();
		}
		/*_ _Fetching result*/
		/*_Encode Respondent Details on db*/
		

		/*_Return response*/
		$deleteEncoded_Resp->execution = $execution;
		$deleteEncoded_Resp->globalTokenResult = $globalTokenResult;
		$deleteEncoded_Resp->rowAffected = $rowAffected;

		echo json_encode($deleteEncoded_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientResponseRef"])){
	$deleteEncoded_Resp = new stdClass();
	$deleteEncoded_Resp->execution = null;
	$deleteEncoded_Resp->globalTokenResult = null;
	$deleteEncoded_Resp->rowAffected = 0;

	echo json_encode($deleteEncoded_Resp);
}
?>