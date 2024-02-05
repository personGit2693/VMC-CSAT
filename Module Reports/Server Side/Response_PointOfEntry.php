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


if(isset($_POST["token"]) && isset($_POST["searchPointOfEntry"]) && isset($_POST["pointOfEntry_StartIndex"]) && isset($_POST["pointOfEntry_Display"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$searchPointOfEntry = $_POST["searchPointOfEntry"];
	$pointOfEntry_StartIndex = $_POST["pointOfEntry_StartIndex"];
	$pointOfEntry_Display = $_POST["pointOfEntry_Display"];		
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$pointOfEntry_Resp = new stdClass();
	$pointOfEntry_Resp->validAccess = true;
	$pointOfEntry_Resp->serverConnection = $dbConnection->serverConnection;
	$pointOfEntry_Resp->validToken = null;
	$pointOfEntry_Resp->execution = null;	
	$pointOfEntry_Resp->pointOfEntryDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$pointOfEntryDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($pointOfEntry_Resp, JSON_NUMERIC_CHECK);

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
		$pointOfEntry_Resp->validToken = $validToken;

		echo json_encode($pointOfEntry_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$pointOfEntry_Resp->validToken = $validToken;

		echo json_encode($pointOfEntry_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Point Of Entry Details*/
		/*_Prep query*/
		$pointOfEntry_Query = "SELECT * FROM offices_tab";

		if(!empty($searchPointOfEntry)){

			$pointOfEntry_Query .= " WHERE office_value LIKE :searchPointOfEntry 
				OR office_abbre LIKE :searchPointOfEntry 				
			";
		}

		$pointOfEntry_Query .= " ORDER BY office_value LIMIT :pointOfEntry_StartIndex, :pointOfEntry_Display;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$pointOfEntry_QueryObj = $dbConnection->selectedPdoConn->prepare($pointOfEntry_Query);		

		if(!empty($searchPointOfEntry)){

			$pointOfEntry_QueryObj->bindValue(':searchPointOfEntry', '%'.$searchPointOfEntry.'%', PDO::PARAM_STR);
		}
		
		$pointOfEntry_QueryObj->bindValue(':pointOfEntry_StartIndex', intval($pointOfEntry_StartIndex), PDO::PARAM_INT);
		$pointOfEntry_QueryObj->bindValue(':pointOfEntry_Display', intval($pointOfEntry_Display), PDO::PARAM_INT);

		$execution = $pointOfEntry_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){

			while($pointOfEntry_Assoc = $pointOfEntry_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$pointOfEntryDetails_Array[] = $pointOfEntry_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Point Of Entry Details*/	
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$pointOfEntry_Resp->execution = $execution;
	$pointOfEntry_Resp->pointOfEntryDetails_Array = $pointOfEntryDetails_Array;

	echo json_encode($pointOfEntry_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/
	
}else if(!isset($_POST["token"]) || !isset($_POST["searchPointOfEntry"]) || !isset($_POST["pointOfEntry_StartIndex"]) || !isset($_POST["pointOfEntry_Display"])){
	
	$pointOfEntry_Resp = new stdClass();
	$pointOfEntry_Resp->validAccess = false;
	$pointOfEntry_Resp->serverConnection = null;
	$pointOfEntry_Resp->validToken = null;
	$pointOfEntry_Resp->execution = null;	
	$pointOfEntry_Resp->pointOfEntryDetails_Array = null;

	echo json_encode($pointOfEntry_Resp, JSON_NUMERIC_CHECK);
}
?>