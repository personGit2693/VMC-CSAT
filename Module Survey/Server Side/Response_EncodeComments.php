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


if(isset($_POST["token"]) && isset($_POST["comments_Base"]) && isset($_POST["clientResponseRef"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$comments_Array = json_decode(base64_decode($_POST["comments_Base"]));
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$encodeComments_Resp = new stdClass();
	$encodeComments_Resp->validAccess = true;
	$encodeComments_Resp->serverConnection = $dbConnection->serverConnection;
	$encodeComments_Resp->validToken = null;	
	$encodeComments_Resp->execution = null;
	$encodeComments_Resp->rowAffected = 0;
	$encodeComments_Resp->endPoint = "./Page_SuccessRatingSubmit.php?token=".$token;

	$validToken = null;
	$execution = null;
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($encodeComments_Resp, JSON_NUMERIC_CHECK);

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
		$encodeComments_Resp->validToken = $validToken;

		echo json_encode($encodeComments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$encodeComments_Resp->validToken = $validToken;

		echo json_encode($encodeComments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){
		
		/*Encode comments on db*/
		for($index=0; $index < count($comments_Array); $index++){			

			/*_Prep query*/
			$encodeComments_Query = "INSERT INTO commentsresponses_tab (clientresponse_reference, 
					question_id,
					commentresponse_value				
				) 
				VALUES (:clientResponseRef,
					:question_id,
					:respondentComment			
				);
			";
			/*_Prep query*/

			/*_Execute query*/
			$encodeComments_QueryObj = $dbConnection->selectedPdoConn->prepare($encodeComments_Query);
			$encodeComments_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeComments_QueryObj->bindValue(':question_id', intval($comments_Array[$index]->question_id), PDO::PARAM_INT);
			$encodeComments_QueryObj->bindValue(':respondentComment', trim($comments_Array[$index]->respondentComment), PDO::PARAM_STR);
			$execution = $encodeComments_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching result*/
			if($execution){

				$rowAffected = $encodeComments_QueryObj->rowCount();

			}else if(!$execution){

				$rowAffected = 0;
				break;
			}
			/*_Fetching result*/
		}								
		/*Encode comments on db*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$encodeComments_Resp->execution = $execution;
	$encodeComments_Resp->rowAffected = $rowAffected;

	echo json_encode($encodeComments_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["comments_Base"]) || !isset($_POST["clientResponseRef"])){
	
	$encodeComments_Resp = new stdClass();
	$encodeComments_Resp->validAccess = false;
	$encodeComments_Resp->serverConnection = null;
	$encodeComments_Resp->validToken = null;	
	$encodeComments_Resp->execution = null;
	$encodeComments_Resp->rowAffected = null;
	$encodeComments_Resp->endPoint = null;	

	echo json_encode($encodeComments_Resp, JSON_NUMERIC_CHECK);
}
?>