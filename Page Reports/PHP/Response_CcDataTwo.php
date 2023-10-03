<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	/*Query string*/


	/*Prep response*/
	$getCcDataTwo_Resp = new stdClass();
	$getCcDataTwo_Resp->execution = null;
	$getCcDataTwo_Resp->globalTokenResult = null;
	$getCcDataTwo_Resp->ccDataTwo_Array = array();
	$getCcDataTwo_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$ccDataTwo_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getCcDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getCcDataTwo_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCcDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getCcDataTwo_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCcDataTwo_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get CC for Data Two*/
		/*_Prep query*/
		$getCcDataTwo_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			ccquestionsrates_tab.ccquestion_id AS 'ccquestion_id',
			ccquestionsrates_tab.ccquestionsrate_rate AS 'ccquestionsrate_rate' 
			FROM clientresponses_tab 
			INNER JOIN ccresponses_tab 
			ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
			INNER JOIN ccquestionsrates_tab 
			ON ccresponses_tab.ccquestionsrate_id = ccquestionsrates_tab.ccquestionsrate_id 
			WHERE clientresponses_tab.clienttype_id = 2
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 		
		";

		if($officeId != 0){
			$getCcDataTwo_Query .= " AND clientresponses_tab.office_id = :officeId";
		}

		$getCcDataTwo_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getCcDataTwo_QueryObj = $vmcCsat_Conn->prepare($getCcDataTwo_Query);		

		$getCcDataTwo_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$getCcDataTwo_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		

		if($officeId != 0){
			$getCcDataTwo_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		}

		$execution = $getCcDataTwo_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			while($ccDataTwo_Assoc = $getCcDataTwo_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$ccDataTwo_Array[] = $ccDataTwo_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get CC for Data Two*/
		

		/*_Return response*/
		$getCcDataTwo_Resp->execution = $execution;
		$getCcDataTwo_Resp->globalTokenResult = $globalTokenResult;
		$getCcDataTwo_Resp->ccDataTwo_Array = $ccDataTwo_Array;

		echo json_encode($getCcDataTwo_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	$getCcDataTwo_Resp = new stdClass();
	$getCcDataTwo_Resp->execution = "";
	$getCcDataTwo_Resp->globalTokenResult = "";
	$getCcDataTwo_Resp->ccDataTwo_Array = "";

	echo json_encode($getCcDataTwo_Resp, JSON_NUMERIC_CHECK);
}
?>