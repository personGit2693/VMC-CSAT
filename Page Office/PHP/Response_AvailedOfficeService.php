<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	/*Query string*/


	/*Prep variables*/
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getOfficeServiceAvailed_Resp = new stdClass();
	$getOfficeServiceAvailed_Resp->execution = null;
	$getOfficeServiceAvailed_Resp->globalTokenResult = null;
	$getOfficeServiceAvailed_Resp->availedOfficeService_Array = array();
	$getOfficeServiceAvailed_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$availedOfficeService_Array = array();
	$availedOfficeService_Array[] = array("Services", "Availed", array("role"=>"annotation"));
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getOfficeServiceAvailed_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getOfficeServiceAvailed_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Office Service Availed*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$getOfficeServiceAvailed_Query = "SELECT officeservices_dummytab.officeservice_name AS 'serviceName',
				IFNULL(serviceavailed_dummytab.availed, 0) AS 'availed' 
				FROM (SELECT officeservices_tab.officeservice_id AS 'officeservice_id', 
				    officeservices_tab.officeservice_name AS 'officeservice_name', 
				    officeservices_tab.office_id  AS 'office_id',
				    officeservices_tab.clienttype_id AS 'clienttype_id',
				    officeservices_tab.officeservice_reqresp AS 'officeservice_reqresp' 
				    FROM officeservices_tab 
				    INNER JOIN offices_tab 
				    ON officeservices_tab.office_id = offices_tab.office_id 
				    WHERE offices_tab.office_id = :officeId 
				    AND (officeservices_tab.clienttype_id = :clientTypeInternal OR officeservices_tab.clienttype_id = :clientTypeExternal)
				) AS officeservices_dummytab 
				LEFT JOIN (SELECT officeservices_tab.officeservice_id AS 'officeservice_id',
				    officeservices_tab.officeservice_name AS 'officeservice_name',
				    COUNT(clientresponses_tab.officeservice_id) AS 'availed'
				    FROM officeservices_tab 
				    INNER JOIN clientresponses_tab 
				    ON officeservices_tab.officeservice_id = clientresponses_tab.officeservice_id 
				    WHERE clientresponses_tab.office_id = :officeId 
				    AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				    AND CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND  CONVERT(:dateTo, DATE)
				    GROUP BY officeservices_tab.officeservice_name
				) AS serviceavailed_dummytab 
				ON officeservices_dummytab.officeservice_id = serviceavailed_dummytab.officeservice_id 
				ORDER BY officeservices_dummytab.officeservice_name;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getOfficeServiceAvailed_QueryObj = $vmcCsat_Conn->prepare($getOfficeServiceAvailed_Query);
			$getOfficeServiceAvailed_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getOfficeServiceAvailed_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getOfficeServiceAvailed_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getOfficeServiceAvailed_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getOfficeServiceAvailed_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$execution = $getOfficeServiceAvailed_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($officeServiceAvailed_Assoc = $getOfficeServiceAvailed_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$availedOfficeService_Array[] = array($officeServiceAvailed_Assoc["serviceName"], $officeServiceAvailed_Assoc["availed"], $officeServiceAvailed_Assoc["availed"]);
				}
			}
			/*_Fetching*/
		}
		/*Get Office Service Availed*/
		

		/*_Return response*/
		$getOfficeServiceAvailed_Resp->execution = $execution;
		$getOfficeServiceAvailed_Resp->globalTokenResult = $globalTokenResult;
		$getOfficeServiceAvailed_Resp->availedOfficeService_Array = $availedOfficeService_Array;

		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	$getOfficeServiceAvailed_Resp = new stdClass();
	$getOfficeServiceAvailed_Resp->execution = null;
	$getOfficeServiceAvailed_Resp->globalTokenResult = null;
	$getOfficeServiceAvailed_Resp->availedOfficeService_Array = array();

	echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
}
?>