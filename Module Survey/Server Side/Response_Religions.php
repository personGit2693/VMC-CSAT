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


if(isset($_POST["token"]) && isset($_POST["searchReligionValue"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$searchReligionValue = $_POST["searchReligionValue"];
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$getReligions_Resp = new stdClass();
	$getReligions_Resp->validAccess = true;
	$getReligions_Resp->serverConnection = $dbConnection->serverConnection;
	$getReligions_Resp->validToken = null;
	$getReligions_Resp->execution = null;
	$getReligions_Resp->religionDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$religionDetails_Array = array();
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($getReligions_Resp, JSON_NUMERIC_CHECK);

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
		$getReligions_Resp->validToken = $validToken;

		echo json_encode($getReligions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$getReligions_Resp->validToken = $validToken;

		echo json_encode($getReligions_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get religions on db*/
		/*_Prep query*/
		$getReligions_Query = "SELECT * FROM religions_tab";

		if(!empty($searchReligionValue)){

			$getReligions_Query .= " WHERE religion_name LIKE :searchReligionValue";
		}
		/*_Prep query*/

		/*_Execute query*/
		$getReligions_QueryObj = $dbConnection->selectedPdoConn->prepare($getReligions_Query);

		if(!empty($searchReligionValue)){

			$getReligions_QueryObj->bindValue(':searchReligionValue', '%'.$searchReligionValue.'%', PDO::PARAM_STR);
		}
		
		$execution = $getReligions_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching result*/
		if($execution){

			while($religion_Assoc = $getReligions_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$religionDetails_Array[] = $religion_Assoc;
			}
		}
		/*_Fetching result*/
		/*Get religions on db*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	
	
	/*Return response*/
	$getReligions_Resp->execution = $execution;
	$getReligions_Resp->religionDetails_Array = $religionDetails_Array;

	echo json_encode($getReligions_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["searchReligionValue"])){
	
	$getReligions_Resp = new stdClass();
	$getReligions_Resp->validAccess = false;
	$getReligions_Resp->serverConnection = null;
	$getReligions_Resp->validToken = null;
	$getReligions_Resp->execution = null;
	$getReligions_Resp->religionDetails_Array = null;

	echo json_encode($getReligions_Resp, JSON_NUMERIC_CHECK);
}
?>