<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep response*/
	$getScores_Resp = new stdClass();
	$getScores_Resp->execution = null;
	$getScores_Resp->globalTokenResult = null;
	$getScores_Resp->scoreDetails_Array = array();
	$getScores_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$scoreDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getScores_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getScores_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getScores_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){
		/*_Get scores on db*/
		/*_ _Prep query*/
		$getScores_Query = "SELECT * FROM scores_tab 
			WHERE NOT score_id = 6
			ORDER BY score_value DESC;
		";
		/*_ _Prep query*/

		/*_ _Execute query*/
		$getScores_QueryObj = $vmcCsat_Conn->prepare($getScores_Query);
		$execution = $getScores_QueryObj->execute();
		/*_ _Execute query*/

		/*_ _Fetching result*/
		if($execution){
			while($score_Assoc = $getScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
				$scoreDetails_Array[] = $score_Assoc;
			}
		}
		/*_ _Fetching result*/
		/*_Get scores on db*/
		

		/*_Return response*/
		$getScores_Resp->execution = $execution;
		$getScores_Resp->globalTokenResult = $globalTokenResult;
		$getScores_Resp->scoreDetails_Array = $scoreDetails_Array;

		echo json_encode($getScores_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"])){
	$getScores_Resp = new stdClass();
	$getScores_Resp->execution = null;
	$getScores_Resp->globalTokenResult = null;
	$getScores_Resp->scoreDetails_Array = array();

	echo json_encode($getScores_Resp);
}
?>