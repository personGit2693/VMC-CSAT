<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["ccRate_Base"]) && isset($_POST["clientResponseRef"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$ccRate_Obj = json_decode(base64_decode($_POST["ccRate_Base"]));
	/*Query string*/


	/*Pre variables*/
	$singleExecution = false;
	/*Pre variables*/


	/*Prep response*/
	$encodeCcRate_Resp = new stdClass();
	$encodeCcRate_Resp->execution_Array = array();
	$encodeCcRate_Resp->globalTokenResult = null;
	$encodeCcRate_Resp->rowAffected_Array = array();
	$encodeCcRate_Resp->serverConnection = $serverConnection;

	$execution_Array = array();
	$globalTokenResult = null;
	$rowAffected_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($encodeCcRate_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$encodeCcRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeCcRate_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$encodeCcRate_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($encodeCcRate_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Encode citizen charter on db*/
		foreach($ccRate_Obj as $ccRatingId){
			/*_ _Prep query*/
			$encodeCcRate_Query = "INSERT INTO ccresponses_tab (clientresponse_reference, 
					ccquestionsrate_id				
				) 
				VALUES (:clientResponseRef,
					:ccRatingId				
				);
			";
			/*_ _Prep query*/

			/*_ _Execute query*/
			$encodeCcRate_QueryObj = $vmcCsat_Conn->prepare($encodeCcRate_Query);
			$encodeCcRate_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeCcRate_QueryObj->bindValue(':ccRatingId', intval($ccRatingId), PDO::PARAM_INT);
			$execution_Array[] = $singleExecution = $encodeCcRate_QueryObj->execute();
			/*_ _Execute query*/

			/*_ _Fetching result*/
			if($singleExecution){
				$rowAffected_Array[] = $encodeCcRate_QueryObj->rowCount();
			}
			/*_ _Fetching result*/
		}								
		/*_Encode citizen charter on db*/
		

		/*_Return response*/
		$encodeCcRate_Resp->execution_Array = $execution_Array;
		$encodeCcRate_Resp->globalTokenResult = $globalTokenResult;
		$encodeCcRate_Resp->rowAffected_Array = $rowAffected_Array;

		echo json_encode($encodeCcRate_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["ccRate_Base"]) || !isset($_POST["clientResponseRef"])){
	$encodeCcRate_Resp = new stdClass();
	$encodeCcRate_Resp->execution_Array = array();
	$encodeCcRate_Resp->globalTokenResult = null;
	$encodeCcRate_Resp->rowAffected_Array = array();

	echo json_encode($encodeCcRate_Resp);
}
?>