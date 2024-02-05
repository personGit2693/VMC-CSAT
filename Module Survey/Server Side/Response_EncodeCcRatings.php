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


if(isset($_POST["token"]) && isset($_POST["ccRate_Base"]) && isset($_POST["clientResponseRef"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientResponseRef = $_POST["clientResponseRef"];
	$ccRate_Obj = json_decode(base64_decode($_POST["ccRate_Base"]));
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$encodeCcRatings_Resp = new stdClass();
	$encodeCcRatings_Resp->validAccess = true;
	$encodeCcRatings_Resp->serverConnection = $dbConnection->serverConnection;
	$encodeCcRatings_Resp->validToken = null;
	$encodeCcRatings_Resp->execution = null;
	$encodeCcRatings_Resp->rowAffected = 0;

	$validToken = null;
	$execution = null;	
	$rowAffected = 0;
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($encodeCcRatings_Resp, JSON_NUMERIC_CHECK);

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
		$encodeCcRatings_Resp->validToken = $validToken;

		echo json_encode($encodeCcRatings_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$encodeCcRatings_Resp->validToken = $validToken;

		echo json_encode($encodeCcRatings_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Encode citizen charter on db*/
		foreach($ccRate_Obj as $ccRatingId){

			/*_Prep query*/
			$encodeCcRatings_Query = "INSERT INTO ccresponses_tab (clientresponse_reference, 
					ccquestionsrate_id				
				) 
				VALUES (:clientResponseRef,
					:ccRatingId				
				);
			";
			/*_Prep query*/

			/*_Execute query*/
			$encodeCcRatings_QueryObj = $dbConnection->selectedPdoConn->prepare($encodeCcRatings_Query);
			$encodeCcRatings_QueryObj->bindValue(':clientResponseRef', $clientResponseRef, PDO::PARAM_STR);
			$encodeCcRatings_QueryObj->bindValue(':ccRatingId', intval($ccRatingId), PDO::PARAM_INT);
			$execution = $encodeCcRatings_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching result*/
			if($execution){
				
				$rowAffected = $encodeCcRatings_QueryObj->rowCount();

			}else if(!$execution){

				$rowAffected = 0;
				break;
			}
			/*_Fetching result*/
		}						
		/*Encode citizen charter on db*/
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$encodeCcRatings_Resp->execution = $execution;
	$encodeCcRatings_Resp->rowAffected = $rowAffected;

	echo json_encode($encodeCcRatings_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["ccRate_Base"]) || !isset($_POST["clientResponseRef"])){
	
	$encodeCcRatings_Resp = new stdClass();
	$encodeCcRatings_Resp->validAccess = false;
	$encodeCcRatings_Resp->serverConnection = null;
	$encodeCcRatings_Resp->validToken = null;
	$encodeCcRatings_Resp->execution = null;
	$encodeCcRatings_Resp->rowAffected = null;

	echo json_encode($encodeCcRatings_Resp, JSON_NUMERIC_CHECK);
}
?>