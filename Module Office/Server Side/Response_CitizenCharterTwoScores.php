<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["ccTwo_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$ccTwo_Id = $_POST["ccTwo_Id"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["office_id"]) && $_SESSION["office_id"] != 0){
	
		$officeId = $_SESSION["office_id"];
	}
	/*Prep variables*/


	/*Prep response*/
	$citizenCharterTwoScores_Resp = new stdClass();
	$citizenCharterTwoScores_Resp->validAccess = true;
	$citizenCharterTwoScores_Resp->serverConnection = $dbConnection->serverConnection;
	$citizenCharterTwoScores_Resp->validToken = null;
	$citizenCharterTwoScores_Resp->execution = null;	
	$citizenCharterTwoScores_Resp->citizenCharterTwoScoresDetails_Array = array();

	$validToken = null;
	$execution = null;	
	$citizenCharterTwoScoresDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($citizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);

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
		$citizenCharterTwoScores_Resp->validToken = $validToken;

		echo json_encode($citizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$citizenCharterTwoScores_Resp->validToken = $validToken;

		echo json_encode($citizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){

		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){	
			
			/*Get Citizen Charter Two Scores*/
			/*_Prep query*/
			$citizenCharterTwoScores_Query = "
				SELECT cc2questions_tab.ccquestion_question AS 'ccQuestion',
				cc2questions_tab.ccquestionsrate_numbering AS 'ccNumbering',
				cc2questions_tab.ccquestionsrate_value AS 'ccRate',
				IFNULL(ccscores_tab.responses, 0) AS 'responses' 
				FROM (SELECT ccquestionsrates_tab.ccquestionsrate_id AS 'ccquestionsrate_id',
					ccquestionsrates_tab.ccquestionsrate_numbering AS 'ccquestionsrate_numbering',
					ccquestionsrates_tab.ccquestionsrate_value AS 'ccquestionsrate_value', 
					ccquestions_tab.ccquestion_question AS 'ccquestion_question' 
					FROM ccquestionsrates_tab 
					INNER JOIN ccquestions_tab 
					ON ccquestionsrates_tab.ccquestion_id = ccquestions_tab.ccquestion_id 
					WHERE ccquestionsrates_tab.ccquestion_id = :ccTwo_Id 
					ORDER BY ccquestionsrates_tab.ccquestionsrate_numbering
				) AS cc2questions_tab 
				LEFT JOIN (SELECT ccresponses_tab.ccquestionsrate_id AS 'ccquestionsrate_id',
				    COUNT(ccresponses_tab.ccresponse_id) AS 'responses'
				    FROM clientresponses_tab 
				    INNER JOIN ccresponses_tab 
				    ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
				    INNER JOIN ccquestionsrates_tab 
				    ON ccresponses_tab.ccquestionsrate_id = ccquestionsrates_tab.ccquestionsrate_id 
				    WHERE clientresponses_tab.office_id = :officeId 
				    AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
					AND CONVERT(ccresponses_tab.ccresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE)
				    AND ccquestionsrates_tab.ccquestion_id = :ccTwo_Id 
				    GROUP BY ccresponses_tab.ccquestionsrate_id
				) AS ccscores_tab 
				ON cc2questions_tab.ccquestionsrate_id = ccscores_tab.ccquestionsrate_id;			
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$citizenCharterTwoScores_QueryObj = $dbConnection->selectedPdoConn->prepare($citizenCharterTwoScores_Query);
			$citizenCharterTwoScores_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$citizenCharterTwoScores_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$citizenCharterTwoScores_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$citizenCharterTwoScores_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$citizenCharterTwoScores_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$citizenCharterTwoScores_QueryObj->bindValue(':ccTwo_Id', $ccTwo_Id, PDO::PARAM_STR);
			$execution = $citizenCharterTwoScores_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){	

				while($citizenCharterTwoScores_Assoc = $citizenCharterTwoScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
					
					$citizenCharterTwoScoresDetails_Array[] = $citizenCharterTwoScores_Assoc;
				}
			}
			/*_Fetching*/
			/*Get Citizen Charter Two Scores*/
		}		
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$citizenCharterTwoScores_Resp->execution = $execution;
	$citizenCharterTwoScores_Resp->citizenCharterTwoScoresDetails_Array = $citizenCharterTwoScoresDetails_Array;

	echo json_encode($citizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["ccTwo_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$citizenCharterTwoScores_Resp = new stdClass();
	$citizenCharterTwoScores_Resp->validAccess = false;
	$citizenCharterTwoScores_Resp->serverConnection = null;
	$citizenCharterTwoScores_Resp->validToken = null;
	$citizenCharterTwoScores_Resp->execution = null;	
	$citizenCharterTwoScores_Resp->citizenCharterTwoScoresDetails_Array = null;

	echo json_encode($citizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
}
?>