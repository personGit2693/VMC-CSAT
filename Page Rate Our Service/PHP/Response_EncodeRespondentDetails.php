<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && $_POST["clientResponseRef"] && isset($_POST["respondentId"]) && isset($_POST["clientResponseAge"]) && isset($_POST["ageRangeId"]) && isset($_POST["genderId"]) && isset($_POST["genderPreferenceId"]) && isset($_POST["religionId"]) && isset($_POST["educationId"]) && isset($_POST["officeId"]) && isset($_POST["clientTypeId"]) && isset($_POST["freqVisitId"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
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
	/*Query string*/


	/*Prep response*/
	$encodeRespondentDetails_Resp = new stdClass();
	$encodeRespondentDetails_Resp->execution = null;
	$encodeRespondentDetails_Resp->globalTokenResult = null;
	$encodeRespondentDetails_Resp->rowAffected = 0;
	$encodeRespondentDetails_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($encodeRespondentDetails_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$encodeRespondentDetails_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeRespondentDetails_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$encodeRespondentDetails_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeRespondentDetails_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode Respondent Details on db*/		
		/*_ _Prep query*/
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
				visityear_id
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
				:freqVisitId
			)
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$encodeRespondentDetails_QueryObj = $vmcCsat_Conn->prepare($encodeRespondentDetails_Query);
		$encodeRespondentDetails_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
		$encodeRespondentDetails_QueryObj->bindValue(':respondentId', intval($respondentId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':ageRangeId', intval($ageRangeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':clientResponseAge', intval($clientResponseAge), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':genderId', intval($genderId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':genderPreferenceId', intval($genderPreferenceId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':religionId', intval($religionId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':educationId', intval($educationId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':clientTypeId', intval($clientTypeId), PDO::PARAM_INT);
		$encodeRespondentDetails_QueryObj->bindValue(':freqVisitId', intval($freqVisitId), PDO::PARAM_INT);
		$execution = $encodeRespondentDetails_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			$rowAffected = $encodeRespondentDetails_QueryObj->rowCount();
		}
		/*_ _Fetching result*/
		/*_Encode Respondent Details on db*/
		

		/*_Return response*/
		$encodeRespondentDetails_Resp->execution = $execution;
		$encodeRespondentDetails_Resp->globalTokenResult = $globalTokenResult;
		$encodeRespondentDetails_Resp->rowAffected = $rowAffected;

		echo json_encode($encodeRespondentDetails_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientResponseRef"]) || !isset($_POST["respondentId"]) || !isset($_POST["clientResponseAge"]) || !isset($_POST["ageRangeId"]) || !isset($_POST["genderId"]) || !isset($_POST["genderPreferenceId"]) || !isset($_POST["religionId"]) || !isset($_POST["educationId"]) || !isset($_POST["officeId"]) || !isset($_POST["clientTypeId"]) || !isset($_POST["freqVisitId"])){
	$encodeRespondentDetails_Resp = new stdClass();
	$encodeRespondentDetails_Resp->execution = null;
	$encodeRespondentDetails_Resp->globalTokenResult = null;
	$encodeRespondentDetails_Resp->rowAffected = 0;

	echo json_encode($encodeRespondentDetails_Resp);
}
?>