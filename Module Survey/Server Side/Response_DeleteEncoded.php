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


if(isset($_POST["token"]) && $_POST["clientResponseRef"]){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$deleteEncoded_Resp = new stdClass();
	$deleteEncoded_Resp->validAccess = true;
	$deleteEncoded_Resp->serverConnection = $dbConnection->serverConnection;
	$deleteEncoded_Resp->validToken = null;
	$deleteEncoded_Resp->execution = null;	
	$deleteEncoded_Resp->rowAffected = 0;

	$validToken = null;
	$execution = null;		
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($deleteEncoded_Resp, JSON_NUMERIC_CHECK);

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
		$deleteEncoded_Resp->validToken = $validToken;

		echo json_encode($deleteEncoded_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$deleteEncoded_Resp->validToken = $validToken;

		echo json_encode($deleteEncoded_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Encode Respondent Details on db*/		
		/*_Prep query*/
		$deleteEncoded_Query = "DELETE FROM clientresponses_tab WHERE clientresponse_reference = :clientResponseRef;";
		/*_Prep query*/

		/*_Execute query*/
		$deleteEncoded_QueryObj = $dbConnection->selectedPdoConn->prepare($deleteEncoded_Query);
		$deleteEncoded_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
		$execution = $deleteEncoded_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/

		if($execution){

			$rowAffected = $deleteEncoded_QueryObj->rowCount();
		}
		/*_Fetching result*/
		/*Encode Respondent Details on db*/


		/*Destroy ESRS bypass*/
		unset($_SESSION["unitAbbre"]);
		/*Destroy ESRS bypass*/
	}
	

	/*_Disconnect*/
	$dbConnection = null;
	/*_Disconnect*/


	/*Return response*/
	$deleteEncoded_Resp->execution = $execution;
	$deleteEncoded_Resp->rowAffected = $rowAffected;

	echo json_encode($deleteEncoded_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["clientResponseRef"])){
	
	$deleteEncoded_Resp = new stdClass();
	$deleteEncoded_Resp->validAccess = false;
	$deleteEncoded_Resp->serverConnection = null;
	$deleteEncoded_Resp->validToken = null;
	$deleteEncoded_Resp->execution = null;	
	$deleteEncoded_Resp->rowAffected = null;

	echo json_encode($deleteEncoded_Resp, JSON_NUMERIC_CHECK);
}
?>