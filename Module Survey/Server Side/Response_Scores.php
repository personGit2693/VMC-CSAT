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


if(isset($_POST["token"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getScores_Resp = new stdClass();
	$getScores_Resp->validAccess = true;
	$getScores_Resp->serverConnection = $dbConnection->serverConnection;
	$getScores_Resp->validToken = null;
	$getScores_Resp->execution = null;	
	$getScores_Resp->scoreDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$scoreDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getScores_Resp, JSON_NUMERIC_CHECK);

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
		$getScores_Resp->validToken = $validToken;

		echo json_encode($getScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getScores_Resp->validToken = $validToken;

		echo json_encode($getScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get scores on db*/
		/*_Prep query*/
		$getScores_Query = "SELECT * FROM scores_tab 
			WHERE NOT score_id = 6
			ORDER BY score_value DESC;
		";
		/*_Prep query*/

		/*_Execute query*/
		$getScores_QueryObj = $dbConnection->selectedPdoConn->prepare($getScores_Query);
		$execution = $getScores_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($score_Assoc = $getScores_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$scoreDetails_Array[] = $score_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get scores on db*/
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$getScores_Resp->execution = $execution;
	$getScores_Resp->scoreDetails_Array = $scoreDetails_Array;

	echo json_encode($getScores_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"])){
	
	$getScores_Resp = new stdClass();
	$getScores_Resp->validAccess = false;
	$getScores_Resp->serverConnection = null;
	$getScores_Resp->validToken = null;
	$getScores_Resp->execution = null;	
	$getScores_Resp->scoreDetails_Array = null;

	echo json_encode($getScores_Resp, JSON_NUMERIC_CHECK);
}
?>