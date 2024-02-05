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


if(isset($_POST["token"]) && $_POST["clientResponseRef"] && isset($_POST["respondentId"]) && isset($_POST["clientResponseAge"]) && isset($_POST["ageRangeId"]) && isset($_POST["genderId"]) && isset($_POST["genderPreferenceId"]) && isset($_POST["religionId"]) && isset($_POST["educationId"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"]) && isset($_POST["freqVisitId"]) && isset($_POST["officeServiceId"]) && isset($_POST["contactDetails"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$respondentId = $_POST["respondentId"];
	$clientResponseAge = $_POST["clientResponseAge"];	
	$ageRangeId = $_POST["ageRangeId"];
	$genderId = $_POST["genderId"];
	$genderPreferenceId = $_POST["genderPreferenceId"];
	$religionId = $_POST["religionId"];
	$educationId = $_POST["educationId"];
	$officeId = $_POST["officeId"];
	$clientTypeId = $_POST["clientTypeId"];
	$freqVisitId = $_POST["freqVisitId"];
	$officeServiceId = $_POST["officeServiceId"];
	$contactDetails = $_POST["contactDetails"];

	$visitorSecretKey = base64_encode($_SERVER["REMOTE_ADDR"]);
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$encodeRespondentDetails_Resp = new stdClass();
	$encodeRespondentDetails_Resp->validAccess = true;
	$encodeRespondentDetails_Resp->serverConnection = $dbConnection->serverConnection;
	$encodeRespondentDetails_Resp->validToken = null;
	$encodeRespondentDetails_Resp->execution = null;	
	$encodeRespondentDetails_Resp->rowAffected = 0;

	$validToken = null;
	$execution = null;		
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($encodeRespondentDetails_Resp, JSON_NUMERIC_CHECK);

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
		$encodeRespondentDetails_Resp->validToken = $validToken;

		echo json_encode($encodeRespondentDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$encodeRespondentDetails_Resp->validToken = $validToken;

		echo json_encode($encodeRespondentDetails_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Encode Respondent Details on db*/		
		/*_Prep query*/
		$encodeRespondentDetails_Query = "INSERT INTO clientresponses_tab (clientresponse_reference,
				respondent_id, 
				agerange_id,
				clientresponse_age, 
				gender_id,
				genderpreference_id,
				religion_id,
				educattain_id,
				office_id,
				clienttype_id,
				visityear_id,
				officeservice_id,
				clientresponse_contactdetails,
				clientresponse_secretkey
			) 
			VALUES (
				:clientResponseRef,
				:respondentId,
				:ageRangeId,
				:clientResponseAge,
				:genderId,
				:genderPreferenceId,
				:religionId,
				:educationId,
				:officeId,
				:clientTypeId,
				:freqVisitId,
				:officeServiceId,
				:contactDetails,
				:visitorSecretKey
			)
		";
		/*_Prep query*/

		/*_Execute query*/
		$encodeRespondentDetails_QueryObj = $dbConnection->selectedPdoConn->prepare($encodeRespondentDetails_Query);
		$encodeRespondentDetails_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
		$encodeRespondentDetails_QueryObj->bindValue(':respondentId', intval($respondentId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':ageRangeId', intval($ageRangeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':clientResponseAge', intval($clientResponseAge), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':genderId', intval($genderId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':genderPreferenceId', intval($genderPreferenceId), PDO::PARAM_INT);
		if(empty($religionId)){

			$encodeRespondentDetails_QueryObj->bindValue(':religionId', NULL, PDO::PARAM_INT);	

		}else if(!empty($religionId)){

			$encodeRespondentDetails_QueryObj->bindValue(':religionId', intval($religionId), PDO::PARAM_INT);
		}		
		$encodeRespondentDetails_QueryObj->bindValue(':educationId', intval($educationId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':freqVisitId', intval($freqVisitId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':officeServiceId', intval($officeServiceId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':contactDetails', $contactDetails, PDO::PARAM_STR);
		$encodeRespondentDetails_QueryObj->bindValue(':visitorSecretKey', $visitorSecretKey, PDO::PARAM_STR);
		$execution = $encodeRespondentDetails_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			$rowAffected = $encodeRespondentDetails_QueryObj->rowCount();
		}
		/*_Fetching result*/
		/*Encode Respondent Details on db*/		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$encodeRespondentDetails_Resp->execution = $execution;
	$encodeRespondentDetails_Resp->rowAffected = $rowAffected;

	echo json_encode($encodeRespondentDetails_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["clientResponseRef"]) || !isset($_POST["respondentId"]) || !isset($_POST["clientResponseAge"]) || !isset($_POST["ageRangeId"]) || !isset($_POST["genderId"]) || !isset($_POST["genderPreferenceId"]) || !isset($_POST["religionId"]) || !isset($_POST["educationId"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["freqVisitId"]) || !isset($_POST["officeServiceId"]) || !isset($_POST["contactDetails"])){
	
	$encodeRespondentDetails_Resp = new stdClass();
	$encodeRespondentDetails_Resp->validAccess = false;
	$encodeRespondentDetails_Resp->serverConnection = null;
	$encodeRespondentDetails_Resp->validToken = null;
	$encodeRespondentDetails_Resp->execution = null;	
	$encodeRespondentDetails_Resp->rowAffected = null;

	echo json_encode($encodeRespondentDetails_Resp, JSON_NUMERIC_CHECK);
}
?>