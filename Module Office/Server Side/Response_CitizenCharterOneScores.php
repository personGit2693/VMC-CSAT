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


if(isset($_POST["token"]) && isset($_POST["ccOne_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"])){
	
	/*Required Files*/
	
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$ccOne_Id = $_POST["ccOne_Id"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$citizenCharterOneScores_Resp = new stdClass();
	$citizenCharterOneScores_Resp->validAccess = true;
	$citizenCharterOneScores_Resp->serverConnection = $dbConnection->serverConnection;
	$citizenCharterOneScores_Resp->validToken = null;
	$citizenCharterOneScores_Resp->execution = null;	
	$citizenCharterOneScores_Resp->citizenCharterOneScoresDetails_Array = array();

	$validToken = null;
	$execution = null;	
	$citizenCharterOneScoresDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($citizenCharterOneScores_Resp, JSON_NUMERIC_CHECK);

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
		$citizenCharterOneScores_Resp->validToken = $validToken;

		echo json_encode($citizenCharterOneScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$citizenCharterOneScores_Resp->validToken = $validToken;

		echo json_encode($citizenCharterOneScores_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Get Citizen Charter One Scores Details*/
			/*_Prep query*/
			$citizenCharterOneScores_Query = "
				SELECT cc1questions_tab.ccquestion_question AS 'ccQuestion',
				cc1questions_tab.ccquestionsrate_numbering AS 'ccNumbering',
				cc1questions_tab.ccquestionsrate_value AS 'ccRate',
				IFNULL(ccscores_tab.responses, 0) AS 'responses' 
				FROM (SELECT ccquestionsrates_tab.ccquestionsrate_id AS 'ccquestionsrate_id',
					ccquestionsrates_tab.ccquestionsrate_numbering AS 'ccquestionsrate_numbering',
					ccquestionsrates_tab.ccquestionsrate_value AS 'ccquestionsrate_value', 
					ccquestions_tab.ccquestion_question AS 'ccquestion_question' 
					FROM ccquestionsrates_tab 
					INNER JOIN ccquestions_tab 
					ON ccquestionsrates_tab.ccquestion_id = ccquestions_tab.ccquestion_id 
					WHERE ccquestionsrates_tab.ccquestion_id = :ccOne_Id
					ORDER BY ccquestionsrates_tab.ccquestionsrate_numbering
				) AS cc1questions_tab 
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
				    AND ccquestionsrates_tab.ccquestion_id = :ccOne_Id 
				    GROUP BY ccresponses_tab.ccquestionsrate_id
				) AS ccscores_tab 
				ON cc1questions_tab.ccquestionsrate_id = ccscores_tab.ccquestionsrate_id;			
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$citizenCharterOneScores_QueryObj = $dbConnection->selectedPdoConn->prepare($citizenCharterOneScores_Query);
			$citizenCharterOneScores_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$citizenCharterOneScores_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$citizenCharterOneScores_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$citizenCharterOneScores_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$citizenCharterOneScores_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$citizenCharterOneScores_QueryObj->bindValue(':ccOne_Id', $ccOne_Id, PDO::PARAM_STR);
			$execution = $citizenCharterOneScores_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){

				while($citizenCharterOneScores_Assoc = $citizenCharterOneScores_QueryObj->fetch(PDO::FETCH_ASSOC)){

					$citizenCharterOneScoresDetails_Array[] = $citizenCharterOneScores_Assoc;
				}
			}
			/*_Fetching*/
			/*Get Citizen Charter One Scores Details*/
		}
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$citizenCharterOneScores_Resp->execution = $execution;	
	$citizenCharterOneScores_Resp->citizenCharterOneScoresDetails_Array = $citizenCharterOneScoresDetails_Array;

	echo json_encode($citizenCharterOneScores_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["ccOne_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"])){
	
	$citizenCharterOneScores_Resp = new stdClass();
	$citizenCharterOneScores_Resp->validAccess = false;
	$citizenCharterOneScores_Resp->serverConnection = null;
	$citizenCharterOneScores_Resp->validToken = null;
	$citizenCharterOneScores_Resp->execution = null;	
	$citizenCharterOneScores_Resp->citizenCharterOneScoresDetails_Array = null;

	echo json_encode($citizenCharterOneScores_Resp, JSON_NUMERIC_CHECK);
}
?>