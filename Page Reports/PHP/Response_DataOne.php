<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["dataOneFromDate"]) && isset($_POST["dataOneToDate"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$officeId = $_POST["officeId"];		
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$dataOneFromDate = $_POST["dataOneFromDate"];
	$dataOneToDate = $_POST["dataOneToDate"];
	/*Query string*/


	/*Prep response*/
	$getDataOne_Resp = new stdClass();
	$getDataOne_Resp->execution = null;
	$getDataOne_Resp->globalTokenResult = null;
	$getDataOne_Resp->dataOne_Array = array();
	$getDataOne_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$dataOne_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getDataOne_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getDataOne_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getDataOne_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getDataOne_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getDataOne_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Data One*/
		/*_Prep query*/
		$getDataOne_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference',
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
			WHERE CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dataOneFromDate, DATE) AND CONVERT(:dataOneToDate, DATE) 
			AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
		";

		if($officeId != 0){
			$getDataOne_Query .= " AND clientresponses_tab.office_id = :officeId";
		}

		$getDataOne_Query .= " ORDER BY clientresponses_tab.clientresponse_date DESC;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getDataOne_QueryObj = $vmcCsat_Conn->prepare($getDataOne_Query);		

		$getDataOne_QueryObj->bindValue(':dataOneFromDate', $dataOneFromDate, PDO::PARAM_STR);
		$getDataOne_QueryObj->bindValue(':dataOneToDate', $dataOneToDate, PDO::PARAM_STR);
		$getDataOne_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
		$getDataOne_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);

		if($officeId != 0){
			$getDataOne_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		}

		$execution = $getDataOne_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){				
			while($dataOne_Assoc = $getDataOne_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$dataOne_Array[] = $dataOne_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Data One*/
		

		/*_Return response*/
		$getDataOne_Resp->execution = $execution;
		$getDataOne_Resp->globalTokenResult = $globalTokenResult;
		$getDataOne_Resp->dataOne_Array = $dataOne_Array;

		echo json_encode($getDataOne_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dataOneFromDate"]) || !isset($_POST["dataOneToDate"])){
	$getDataOne_Resp = new stdClass();
	$getDataOne_Resp->execution = null;
	$getDataOne_Resp->globalTokenResult = null;
	$getDataOne_Resp->dataOne_Array = array();

	echo json_encode($getDataOne_Resp, JSON_NUMERIC_CHECK);
}
?>