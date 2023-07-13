<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["respondentRatings_Base"]) && isset($_POST["clientResponseRef"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$respondentRatings_Array = json_decode(base64_decode($_POST["respondentRatings_Base"]));
	/*Query string*/


	/*Pre variables*/
	$singleExecution = false;
	/*Pre variables*/


	/*Prep response*/
	$encodeRespondentRatings_Resp = new stdClass();
	$encodeRespondentRatings_Resp->execution_Array = array();
	$encodeRespondentRatings_Resp->globalTokenResult = null;
	$encodeRespondentRatings_Resp->rowAffected_Array = array();
	$encodeRespondentRatings_Resp->serverConnection = $serverConnection;

	$execution_Array = array();
	$globalTokenResult = null;
	$rowAffected_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($encodeRespondentRatings_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$encodeRespondentRatings_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeRespondentRatings_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$encodeRespondentRatings_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeRespondentRatings_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode respondent ratings on db*/
		for($index=0; $index<count($respondentRatings_Array); $index++){
			$questionId = $respondentRatings_Array[$index]->questionId;
			$scoreId = $respondentRatings_Array[$index]->scoreId;

			/*_ _Prep query*/
			$encodeRespondentRatings_Query = "INSERT INTO questionresponses_tab (clientresponse_reference, 
					question_id,
					score_id				
				) 
				VALUES (:clientResponseRef,
					:questionId,
					:scoreId			
				);
			";
			/*_ _Prep query*/

			/*_ _Execute query*/
			$encodeRespondentRatings_QueryObj = $vmcCsat_Conn->prepare($encodeRespondentRatings_Query);
			$encodeRespondentRatings_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeRespondentRatings_QueryObj->bindValue(':questionId', intval($questionId), PDO::PARAM_INT);
			$encodeRespondentRatings_QueryObj->bindValue(':scoreId', intval($scoreId), PDO::PARAM_INT);
			$execution_Array[] = $singleExecution = $encodeRespondentRatings_QueryObj->execute();
			/*_ _Execute query*/

			/*_ _Fetching result*/
			if($singleExecution){
				$rowAffected_Array[] = $encodeRespondentRatings_QueryObj->rowCount();
			}
			/*_ _Fetching result*/
		}								
		/*_Encode respondent ratings on db*/
		

		/*_Return response*/
		$encodeRespondentRatings_Resp->execution_Array = $execution_Array;
		$encodeRespondentRatings_Resp->globalTokenResult = $globalTokenResult;
		$encodeRespondentRatings_Resp->rowAffected_Array = $rowAffected_Array;

		echo json_encode($encodeRespondentRatings_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["respondentRatings_Base"]) || !isset($_POST["clientResponseRef"])){
	$encodeRespondentRatings_Resp = new stdClass();
	$encodeRespondentRatings_Resp->execution_Array = array();
	$encodeRespondentRatings_Resp->globalTokenResult = null;
	$encodeRespondentRatings_Resp->rowAffected_Array = array();

	echo json_encode($encodeRespondentRatings_Resp);
}
?>