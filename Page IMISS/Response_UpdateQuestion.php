<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["newQuestion"]) && isset($_POST["questionId"])){
	/*Required Files*/
	require_once "../Global PHP/Connection.php";
	require_once "../Global PHP/CheckGlobalToken_Class.php";
	require_once "../Global PHP/UpdateQuestion_Class.php";
	/*Required Files*/


	/*Query string*/
	$newQuestion = $_POST["newQuestion"];
	$questionId = $_POST["questionId"];
	$token = $_POST["token"];	
	/*Query string*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Prep response*/
	$updateQuestion_Resp = new stdClass();
	$updateQuestion_Resp->updateQuestionResult = null;	
	$updateQuestion_Resp->globalTokenResult = null;	
	$updateQuestion_Resp->serverConnection = $serverConnection;

	$updateQuestionResult = null;
	$globalTokenResult = null;	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$updateQuestion_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$updateQuestion_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Update question*/
	if($globalTokenResult == null){
		$updateQuestion_Obj = updateQuestion($vmcCsat_Conn, intval($questionId), $newQuestion);

		if($updateQuestion_Obj->execution != true){
			$updateQuestionResult = "Updating question has execution problem!";
			$updateQuestion_Resp->updateQuestionResult = $updateQuestionResult;

			echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
			return;
		}else if($updateQuestion_Obj->count == 0){
			$updateQuestionResult = "No question has been updated.";
			$updateQuestion_Resp->updateQuestionResult = $updateQuestionResult;

			echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
			return;
		}


		/*_Return response*/
		$updateQuestion_Resp->updateQuestionResult = $updateQuestionResult;
		$updateQuestion_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}	
	/*Update question*/	
	
}else if(!isset($_POST["token"]) || !isset($_POST["newQuestion"]) || !isset($_POST["questionId"])){
	$updateQuestion_Resp = new stdClass();
	$updateQuestion_Resp->updateQuestionResult = "unknown";
	$updateQuestion_Resp->globalTokenResult = "unknown";		

	echo json_encode($updateQuestion_Resp, JSON_NUMERIC_CHECK);
}
?>