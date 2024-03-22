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
	$csmRespondentsDetails_Resp = new stdClass();
	$csmRespondentsDetails_Resp->validAccess = true;
	$csmRespondentsDetails_Resp->serverConnection = $dbConnection->serverConnection;
	$csmRespondentsDetails_Resp->validToken = null;
	$csmRespondentsDetails_Resp->execution = null;	
	$csmRespondentsDetails_Resp->csmRespondentsDetails_Array = array();	

	$validToken = null;
	$execution = null;		
	$csmRespondentsDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($csmRespondentsDetails_Resp, JSON_NUMERIC_CHECK);

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
		$csmRespondentsDetails_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$csmRespondentsDetails_Resp->validToken = $validToken;

		echo json_encode($csmRespondentsDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get CSM Respondents Details*/
		/*_Prep query*/
		$csmRespondentsDetails_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
			clientresponses_tab.clientresponse_age AS 'clientresponse_age',
			DATE_FORMAT(clientresponses_tab.clientresponse_date, '%c/%e/%Y') AS 'clientresponse_date',
			officeservices_tab.officeservice_name AS 'officeservice_name',
			respondents_tab.respondent_name AS 'respondent_name',
			genders_tab.gender_abbre AS 'gender_abbre',
			IFNULL(religions_tab.religion_name, '') AS 'religion_name',
			educattains_tab.educattain_value AS 'educattain_value',
			offices_tab.office_value AS 'office_value',			
			visityears_tab.visityear_value AS 'visityear_value'
			FROM clientresponses_tab 
			INNER JOIN respondents_tab 
			ON clientresponses_tab.respondent_id = respondents_tab.respondent_id 
			INNER JOIN genders_tab 
			ON clientresponses_tab.gender_id = genders_tab.gender_id 			
			INNER JOIN educattains_tab 
			ON clientresponses_tab.educattain_id = educattains_tab.educattain_id 
			INNER JOIN offices_tab 
			ON clientresponses_tab.office_id = offices_tab.office_id 			
			INNER JOIN officeservices_tab 
			ON clientresponses_tab.officeservice_id = officeservices_tab.officeservice_id
			INNER JOIN visityears_tab 
			ON clientresponses_tab.visityear_id = visityears_tab.visityear_id 
			LEFT JOIN religions_tab 
			ON clientresponses_tab.religion_id = religions_tab.religion_id
			WHERE CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
			AND clientresponses_tab.clienttype_id = :internal_clientTypeId 			
		";

		if($office_id != 0){
			$csmRespondentsDetails_Query .= " AND clientresponses_tab.office_id = :office_id";
		}

		$csmRespondentsDetails_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$csmRespondentsDetails_QueryObj = $dbConnection->selectedPdoConn->prepare($csmRespondentsDetails_Query);		

		$csmRespondentsDetails_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$csmRespondentsDetails_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
		$csmRespondentsDetails_QueryObj->bindValue(':internal_clientTypeId', intval($internal_clientTypeId), PDO::PARAM_INT);

		if($office_id != 0){

			$csmRespondentsDetails_QueryObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $csmRespondentsDetails_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				

			while($csmRespondentDetails_Assoc = $csmRespondentsDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$csmRespondentsDetails_Array[] = $csmRespondentDetails_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get CSM Respondents Details*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$csmRespondentsDetails_Resp->execution = $execution;	
	$csmRespondentsDetails_Resp->csmRespondentsDetails_Array = $csmRespondentsDetails_Array;

	echo json_encode($csmRespondentsDetails_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["internal_clientTypeId"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$csmRespondentsDetails_Resp = new stdClass();
	$csmRespondentsDetails_Resp->validAccess = false;
	$csmRespondentsDetails_Resp->serverConnection = null;
	$csmRespondentsDetails_Resp->validToken = null;
	$csmRespondentsDetails_Resp->execution = null;	
	$csmRespondentsDetails_Resp->csmRespondentsDetails_Array = null;

	echo json_encode($csmRespondentsDetails_Resp, JSON_NUMERIC_CHECK);
}
?>