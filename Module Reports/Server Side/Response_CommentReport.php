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


if(isset($_POST["token"]) && isset($_POST["office_id"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$office_id = $_POST["office_id"];			
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];	
	/*Query string*/


	/*Prep Variables*/
	$dbConnection = connectToDb("vmc_csat");
	/*Prep Variables*/


	/*Prep response*/
	$commentReport_Resp = new stdClass();
	$commentReport_Resp->validAccess = true;
	$commentReport_Resp->serverConnection = $dbConnection->serverConnection;
	$commentReport_Resp->validToken = null;
	$commentReport_Resp->execution = null;	
	$commentReport_Resp->commentsDetails_Array = array();	

	$validToken = null;
	$execution = null;		
	$commentsDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($commentReport_Resp, JSON_NUMERIC_CHECK);

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
		$commentReport_Resp->validToken = $validToken;

		echo json_encode($commentReport_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$commentReport_Resp->validToken = $validToken;

		echo json_encode($commentReport_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		/*Get Respondent Question Rate Details*/
		/*_Prep query*/
		$commentReport_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'clientresponse_reference', 
			offices_tab.office_value AS 'office_value', 
			questions_tab.question_value AS 'question_value',
			commentsresponses_tab.commentresponse_value AS 'commentresponse_value',
			clientresponses_tab.clientresponse_date AS 'clientresponse_date'
			FROM clientresponses_tab 
			INNER JOIN offices_tab 
			ON clientresponses_tab.office_id = offices_tab.office_id 
			INNER JOIN commentsresponses_tab 
			ON clientresponses_tab.clientresponse_reference = commentsresponses_tab.clientresponse_reference 
			INNER JOIN questions_tab 
			ON commentsresponses_tab.question_id = questions_tab.question_id 
			WHERE CONVERT(clientresponses_tab.clientresponse_date, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 			 
		";

		if($office_id != 0){
			$commentReport_Query .= " AND clientresponses_tab.office_id = :office_id";
		}

		$commentReport_Query .= " ORDER BY clientresponses_tab.clientresponse_date, offices_tab.office_value"; 							
		/*_Prep query*/

		/*_Execute query*/
		$commentReport_QueryObj = $dbConnection->selectedPdoConn->prepare($commentReport_Query);		

		$commentReport_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
		$commentReport_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);						

		if($office_id != 0){
			$commentReport_QueryObj->bindValue(':office_id', intval($office_id), PDO::PARAM_INT);
		}

		$execution = $commentReport_QueryObj->execute();
		/*_Execute query*/

		/*_Fetching*/
		if($execution){	

			while($commentDetails_Assoc = $commentReport_QueryObj->fetch(PDO::FETCH_ASSOC)){
				
				$commentsDetails_Array[] = $commentDetails_Assoc;
			}
		}
		/*_Fetching*/		
		/*Get Respondent Question Rate Details*/		
	}


	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/
	

	/*Return response*/
	$commentReport_Resp->execution = $execution;
	$commentReport_Resp->commentsDetails_Array = $commentsDetails_Array;

	echo json_encode($commentReport_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/


}else if(!isset($_POST["token"]) || !isset($_POST["office_id"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"])){
	
	$commentReport_Resp = new stdClass();
	$commentReport_Resp->validAccess = false;
	$commentReport_Resp->serverConnection = null;
	$commentReport_Resp->validToken = null;
	$commentReport_Resp->execution = null;	
	$commentReport_Resp->commentsDetails_Array = null;

	echo json_encode($commentReport_Resp, JSON_NUMERIC_CHECK);
}
?>