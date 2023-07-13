<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["comments_Base"]) && isset($_POST["clientResponseRef"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$comments_Array = json_decode(base64_decode($_POST["comments_Base"]));
	/*Query string*/


	/*Pre variables*/
	$singleExecution = false;
	/*Pre variables*/


	/*Prep response*/
	$encodeComments_Resp = new stdClass();
	$encodeComments_Resp->execution_Array = array();
	$encodeComments_Resp->globalTokenResult = null;
	$encodeComments_Resp->rowAffected_Array = array();
	$encodeComments_Resp->serverConnection = $serverConnection;

	$execution_Array = array();
	$globalTokenResult = null;
	$rowAffected_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($encodeComments_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$encodeComments_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeComments_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$encodeComments_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeComments_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode comments on db*/
		for($index=0; $index<count($comments_Array); $index++){
			$questionId = $comments_Array[$index]->questionId;
			$respondentComment = $comments_Array[$index]->respondentComment;

			/*_ _Prep query*/
			$encodeComments_Query = "INSERT INTO commentsresponses_tab (clientresponse_reference, 
					question_id,
					commentresponse_value				
				) 
				VALUES (:clientResponseRef,
					:questionId,
					:respondentComment			
				);
			";
			/*_ _Prep query*/

			/*_ _Execute query*/
			$encodeComments_QueryObj = $vmcCsat_Conn->prepare($encodeComments_Query);
			$encodeComments_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeComments_QueryObj->bindValue(':questionId', intval($questionId), PDO::PARAM_INT);
			$encodeComments_QueryObj->bindValue(':respondentComment', trim($respondentComment), PDO::PARAM_STR);
			$execution_Array[] = $singleExecution = $encodeComments_QueryObj->execute();
			/*_ _Execute query*/

			/*_ _Fetching result*/
			if($singleExecution){
				$rowAffected_Array[] = $encodeComments_QueryObj->rowCount();
			}
			/*_ _Fetching result*/
		}								
		/*_Encode comments on db*/
		

		/*_Return response*/
		$encodeComments_Resp->execution_Array = $execution_Array;
		$encodeComments_Resp->globalTokenResult = $globalTokenResult;
		$encodeComments_Resp->rowAffected_Array = $rowAffected_Array;

		echo json_encode($encodeComments_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["comments_Base"]) || !isset($_POST["clientResponseRef"])){
	$encodeComments_Resp = new stdClass();
	$encodeComments_Resp->execution_Array = array();
	$encodeComments_Resp->globalTokenResult = null;
	$encodeComments_Resp->rowAffected_Array = array();

	echo json_encode($encodeComments_Resp);
}
?>