<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
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
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getOfficeServiceAvailed_Resp = new stdClass();
	$getOfficeServiceAvailed_Resp->validAccess = true;
	$getOfficeServiceAvailed_Resp->serverConnection = $dbConnection->serverConnection;
	$getOfficeServiceAvailed_Resp->validToken = null;
	$getOfficeServiceAvailed_Resp->execution = null;	
	$getOfficeServiceAvailed_Resp->availedOfficeService_Array = array();

	$validToken = null;
	$execution = null;		
	$availedOfficeService_Array = array();
	$availedOfficeService_Array[] = array("Services", "Availed", array("role"=>"annotation"));
	/*Prep response*/


	/*Validate token*/
	$validateGlobalToken_Obj = validateGlobalToken($dbConnection->selectedPdoConn, $token);

	if($validateGlobalToken_Obj->execution !== true){

		$validToken = "Validating global token has execution problem!";
		$getOfficeServiceAvailed_Resp->validToken = $validToken;

		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getOfficeServiceAvailed_Resp->validToken = $validToken;

		echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		

		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Get Office Service Availed*/
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
			$getOfficeServiceAvailed_QueryObj = $dbConnection->selectedPdoConn->prepare($getOfficeServiceAvailed_Query);
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
			/*Get Office Service Availed*/
		}
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getOfficeServiceAvailed_Resp->execution = $execution;
	$getOfficeServiceAvailed_Resp->availedOfficeService_Array = $availedOfficeService_Array;

	echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$getOfficeServiceAvailed_Resp = new stdClass();
	$getOfficeServiceAvailed_Resp->validAccess = false;
	$getOfficeServiceAvailed_Resp->serverConnection = null;
	$getOfficeServiceAvailed_Resp->validToken = null;
	$getOfficeServiceAvailed_Resp->execution = null;	
	$getOfficeServiceAvailed_Resp->availedOfficeService_Array = null;

	echo json_encode($getOfficeServiceAvailed_Resp, JSON_NUMERIC_CHECK);
}
?>