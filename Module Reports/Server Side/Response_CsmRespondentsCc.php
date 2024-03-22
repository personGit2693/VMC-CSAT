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


if(isset($_POST["token"]) && isset($_POST["internal_clientTypeId"]) && isset($_POST["office_id"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$office_id = $_POST["office_id"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$internal_clientTypeId = $_POST["internal_clientTypeId"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$csmRespondentsCc_Resp = new stdClass();
	$csmRespondentsCc_Resp->validAccess = true;
	$csmRespondentsCc_Resp->serverConnection = $dbConnection->serverConnection;
	$csmRespondentsCc_Resp->validToken = null;
	$csmRespondentsCc_Resp->execution = null;	
	$csmRespondentsCc_Resp->csmRespondentsCc_Array = array();	

	$validToken = null;
	$execution = null;		
	$csmRespondentsCc_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($csmRespondentsCc_Resp, JSON_NUMERIC_CHECK);

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
		$csmRespondentsCc_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsCc_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$csmRespondentsCc_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsCc_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		/*Get CSM Respondents Cc*/
		/*_Prep query*/
		$csmRespondentsCc_QueryObj = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			ccquestionsrates_tab.ccquestion_id AS 'ccquestion_id',
			ccquestionsrates_tab.ccquestionsrate_rate AS 'ccquestionsrate_rate' 
			FROM clientresponses_tab 
			INNER JOIN ccresponses_tab 
			ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
			INNER JOIN ccquestionsrates_tab 
			ON ccresponses_tab.ccquestionsrate_id = ccquestionsrates_tab.ccquestionsrate_id 			
			WHERE clientresponses_tab.clienttype_id = :internal_clientTypeId 			
			AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
		";

		if($office_id != 0){
			$csmRespondentsCc_QueryObj .= " AND clientresponses_tab.office_id = :office_id";
		}

		$csmRespondentsCc_QueryObj .= " ORDER BY clientresponses_tab.clientresponse_date DESC"; 							
		/*_Prep query*/

		/*_Execute query*/
		$csmRespondentsCc_QueryObjObj = $dbConnection->selectedPdoConn->prepare($csmRespondentsCc_QueryObj);		

		$csmRespondentsCc_QueryObjObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$csmRespondentsCc_QueryObjObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);		
		$csmRespondentsCc_QueryObjObj->bindValue(':internal_clientTypeId', intval($internal_clientTypeId), PDO::PARAM_INT);

		if($office_id != 0){
			$csmRespondentsCc_QueryObjObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $csmRespondentsCc_QueryObjObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($csmRespondentCc_Assoc = $csmRespondentsCc_QueryObjObj->fetch(PDO::FETCH_ASSOC)){
				
				$csmRespondentsCc_Array[] = $csmRespondentCc_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get CSM Respondents Cc*/		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$csmRespondentsCc_Resp->execution = $execution;	
	$csmRespondentsCc_Resp->csmRespondentsCc_Array = $csmRespondentsCc_Array;

	echo json_encode($csmRespondentsCc_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["internal_clientTypeId"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$csmRespondentsCc_Resp = new stdClass();
	$csmRespondentsCc_Resp->validAccess = false;
	$csmRespondentsCc_Resp->serverConnection = null;
	$csmRespondentsCc_Resp->validToken = null;
	$csmRespondentsCc_Resp->execution = null;	
	$csmRespondentsCc_Resp->csmRespondentsCc_Array = null;

	echo json_encode($csmRespondentsCc_Resp, JSON_NUMERIC_CHECK);
}
?>