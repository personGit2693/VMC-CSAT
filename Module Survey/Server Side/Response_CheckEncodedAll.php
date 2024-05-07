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
	$checkEncodedAll_Resp = new stdClass();
	$checkEncodedAll_Resp->validAccess = true;
	$checkEncodedAll_Resp->serverConnection = $dbConnection->serverConnection;
	$checkEncodedAll_Resp->selectedPdoConn = $dbConnection->selectedPdoConn;
	$checkEncodedAll_Resp->validToken = null;
	$checkEncodedAll_Resp->execution = null;		
	$checkEncodedAll_Resp->found = 0;
	$checkEncodedAll_Resp->endPoint = "./Page_SuccessRatingSubmit.php?token=".$token;	

	$validToken = null;
	$execution = null;		
	$found = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null || $dbConnection->selectedPdoConn == null){

		echo json_encode($checkEncodedAll_Resp, JSON_NUMERIC_CHECK);

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
		$checkEncodedAll_Resp->validToken = $validToken;

		echo json_encode($checkEncodedAll_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$checkEncodedAll_Resp->validToken = $validToken;

		echo json_encode($checkEncodedAll_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Check if all details was encoded*/
		/*_Prep query*/
		$checkEncodedAll_Query = "SELECT clientresponses_tab.office_id AS 'office id',
			clientresponses_tab.clientresponse_reference AS 'client_ref',
			ccresponses_tab.clientresponse_reference AS 'cc_ref',
			questionresponses_tab.clientresponse_reference AS 'questions_ref'
			FROM clientresponses_tab 
			LEFT JOIN ccresponses_tab 
			ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
			LEFT JOIN questionresponses_tab 
			ON clientresponses_tab.clientresponse_reference = questionresponses_tab.clientresponse_reference 
			WHERE clientresponses_tab.clientresponse_reference = :clientResponseRef
			AND (ccresponses_tab.clientresponse_reference IS NULL OR questionresponses_tab.clientresponse_reference IS NULL);
		";
		/*_Prep query*/

		/*_Execute query*/
		$checkEncodedAll_QueryObj = $dbConnection->selectedPdoConn->prepare($checkEncodedAll_Query);
		$checkEncodedAll_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
		$execution = $checkEncodedAll_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			$found = $checkEncodedAll_QueryObj->rowCount();
		}
		/*_Fetching result*/
		/*Check if all details was encoded*/		
	}
	

	/*Return response*/
	$checkEncodedAll_Resp->execution = $execution;
	$checkEncodedAll_Resp->found = $found;

	echo json_encode($checkEncodedAll_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientResponseRef"])){
	
	$checkEncodedAll_Resp = new stdClass();
	$checkEncodedAll_Resp->validAccess = false;
	$checkEncodedAll_Resp->serverConnection = null;
	$checkEncodedAll_Resp->selectedPdoConn = null;
	$checkEncodedAll_Resp->validToken = null;
	$checkEncodedAll_Resp->execution = null;		
	$checkEncodedAll_Resp->found = null;
	$checkEncodedAll_Resp->endPoint = null;

	echo json_encode($checkEncodedAll_Resp, JSON_NUMERIC_CHECK);
}
?>