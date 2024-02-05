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


if(isset($_POST["token"]) && isset($_POST["respondentRatings_Base"]) && isset($_POST["clientResponseRef"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$respondentRatings_Array = json_decode(base64_decode($_POST["respondentRatings_Base"]));
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$encodeRespondentRatings_Resp = new stdClass();
	$encodeRespondentRatings_Resp->validAccess = true;
	$encodeRespondentRatings_Resp->serverConnection = $dbConnection->serverConnection;
	$encodeRespondentRatings_Resp->validToken = null;
	$encodeRespondentRatings_Resp->execution = null;	
	$encodeRespondentRatings_Resp->rowAffected = 0;

	$validToken = null;
	$execution = null;	
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($encodeRespondentRatings_Resp, JSON_NUMERIC_CHECK);

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
		$encodeRespondentRatings_Resp->validToken = $validToken;

		echo json_encode($encodeRespondentRatings_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$encodeRespondentRatings_Resp->validToken = $validToken;

		echo json_encode($encodeRespondentRatings_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Encode respondent ratings on db*/
		for($index=0; $index < count($respondentRatings_Array); $index++){			

			/*_Prep query*/
			$encodeRespondentRatings_Query = "INSERT INTO questionresponses_tab (clientresponse_reference, 
					question_id,
					score_id				
				) 
				VALUES (:clientResponseRef,
					:question_id,
					:score_id			
				);
			";
			/*_Prep query*/

			/*_Execute query*/
			$encodeRespondentRatings_QueryObj = $dbConnection->selectedPdoConn->prepare($encodeRespondentRatings_Query);
			$encodeRespondentRatings_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeRespondentRatings_QueryObj->bindValue(':question_id', intval($respondentRatings_Array[$index]->questionDetails_Obj->question_id), PDO::PARAM_INT);
			$encodeRespondentRatings_QueryObj->bindValue(':score_id', intval($respondentRatings_Array[$index]->score_id), PDO::PARAM_INT);
			$execution = $encodeRespondentRatings_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching result*/
			if($execution){

				$rowAffected = $encodeRespondentRatings_QueryObj->rowCount();

			}else if(!$execution){
				
				$rowAffected = 0;
				break;
			}
			/*_Fetching result*/
		}								
		/*Encode respondent ratings on db*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/

	
	/*Return response*/
	$encodeRespondentRatings_Resp->execution = $execution;
	$encodeRespondentRatings_Resp->rowAffected = $rowAffected;

	echo json_encode($encodeRespondentRatings_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["respondentRatings_Base"]) || !isset($_POST["clientResponseRef"])){
	
	$encodeRespondentRatings_Resp = new stdClass();
	$encodeRespondentRatings_Resp->validAccess = false;
	$encodeRespondentRatings_Resp->serverConnection = null;
	$encodeRespondentRatings_Resp->validToken = null;
	$encodeRespondentRatings_Resp->execution = null;	
	$encodeRespondentRatings_Resp->rowAffected = null;

	echo json_encode($encodeRespondentRatings_Resp, JSON_NUMERIC_CHECK);
}
?>