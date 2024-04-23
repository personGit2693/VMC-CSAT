<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
session_start();
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["searchPointOfEntry"]) && isset($_POST["startIn"]) && isset($_POST["maxDisplayRow"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$searchPointOfEntry = $_POST["searchPointOfEntry"];
	$startIn = $_POST["startIn"];
	$maxDisplayRow = $_POST["maxDisplayRow"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");

	$division_id = intval($_SESSION["division_id"]);
	/*Prep Variables*/


	/*Prep response*/
	$getPointOfEntry_Resp = new stdClass();
	$getPointOfEntry_Resp->validAccess = true;
	$getPointOfEntry_Resp->serverConnection = $dbConnection->serverConnection;
	$getPointOfEntry_Resp->validToken = null;
	$getPointOfEntry_Resp->execution = null;	
	$getPointOfEntry_Resp->pointOfEntry_Array = array();

	$validToken = null;
	$execution = null;		
	$pointOfEntry_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);

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
		$getPointOfEntry_Resp->validToken = $validToken;

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getPointOfEntry_Resp->validToken = $validToken;

		echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Point Of Entry*/
		/*_Prep query*/
		if($division_id == 9){

			$getPointOfEntry_Query = "SELECT * FROM offices_tab WHERE 1 = 1";

		}else if($division_id != 9){

			$getPointOfEntry_Query = "SELECT * FROM offices_tab WHERE division_id = :division_id";
		}			

		if(!empty($searchPointOfEntry)){

			$getPointOfEntry_Query .= " AND (office_value LIKE :searchPointOfEntry 
				OR office_abbre LIKE :searchPointOfEntry)				
			";
		}


		$getPointOfEntry_Query .= " ORDER BY office_value LIMIT :startIn, :maxDisplayRow;"; 							
		/*_Prep query*/

		/*_Execute query*/
		$getPointOfEntry_QueryObj = $dbConnection->selectedPdoConn->prepare($getPointOfEntry_Query);		

		if($division_id != 9){

			$getPointOfEntry_QueryObj->bindValue(':division_id', intval($division_id), PDO::PARAM_INT);	
		}

		if(!empty($searchPointOfEntry)){

			$getPointOfEntry_QueryObj->bindValue(':searchPointOfEntry', '%'.$searchPointOfEntry.'%', PDO::PARAM_STR);			
		}

		
		$getPointOfEntry_QueryObj->bindValue(':startIn', intval($startIn), PDO::PARAM_INT);
		$getPointOfEntry_QueryObj->bindValue(':maxDisplayRow', intval($maxDisplayRow), PDO::PARAM_INT);

		$execution = $getPointOfEntry_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($pointOfEntry_Assoc = $getPointOfEntry_QueryObj->fetch(PDO::FETCH_ASSOC)){

				$pointOfEntry_Array[] = $pointOfEntry_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Point Of Entry*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$getPointOfEntry_Resp->execution = $execution;
	$getPointOfEntry_Resp->pointOfEntry_Array = $pointOfEntry_Array;

	echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["searchPointOfEntry"]) || !isset($_POST["startIn"]) || !isset($_POST["maxDisplayRow"])){
	
	$getPointOfEntry_Resp = new stdClass();
	$getPointOfEntry_Resp->validAccess = false;
	$getPointOfEntry_Resp->serverConnection = null;
	$getPointOfEntry_Resp->validToken = null;
	$getPointOfEntry_Resp->execution = null;	
	$getPointOfEntry_Resp->pointOfEntry_Array = null;

	echo json_encode($getPointOfEntry_Resp, JSON_NUMERIC_CHECK);
}
?>