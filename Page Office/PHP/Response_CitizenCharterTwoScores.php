<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
session_start();
date_default_timezone_set('Asia/Manila');
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["overallFromDate"]) && isset($_POST["overallToDate"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$overallFromDate = $_POST["overallFromDate"];
	$overallToDate = $_POST["overallToDate"];
	/*Query string*/


	/*Prep variables*/
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/


	/*Prep response*/
	$getCitizenCharterTwoScores_Resp = new stdClass();
	$getCitizenCharterTwoScores_Resp->execution = null;
	$getCitizenCharterTwoScores_Resp->globalTokenResult = null;
	$getCitizenCharterTwoScores_Resp->citizenCharterTwoScores_Array = array();
	$getCitizenCharterTwoScores_Resp->serverConnection = $serverConnection;

	$execution = null;
	$globalTokenResult = null;
	$citizenCharterTwoScores_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getCitizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getCitizenCharterTwoScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCitizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getCitizenCharterTwoScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCitizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){

		/*Get Questions scores*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){	
			/*_Prep query*/
			$getCitizenCharterTwoScores_Query = "
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
					WHERE ccquestionsrates_tab.ccquestion_id = 'CC2' 
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
					AND CONVERT(ccresponses_tab.ccresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE)
				    AND ccquestionsrates_tab.ccquestion_id = 'CC2' 
				    GROUP BY ccresponses_tab.ccquestionsrate_id
				) AS ccscores_tab 
				ON cc2questions_tab.ccquestionsrate_id = ccscores_tab.ccquestionsrate_id;			
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getCitizenCharterTwoScores_QueryObj = $vmcCsat_Conn->prepare($getCitizenCharterTwoScores_Query);
			$getCitizenCharterTwoScores_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getCitizenCharterTwoScores_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getCitizenCharterTwoScores_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getCitizenCharterTwoScores_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$getCitizenCharterTwoScores_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $getCitizenCharterTwoScores_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($citizenCharterTwoScores_Assoc = $getCitizenCharterTwoScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$citizenCharterTwoScores_Array[] = $citizenCharterTwoScores_Assoc;
				}
			}
			/*_Fetching*/
		}
		/*Get Questions scores*/
		

		/*_Return response*/
		$getCitizenCharterTwoScores_Resp->execution = $execution;
		$getCitizenCharterTwoScores_Resp->globalTokenResult = $globalTokenResult;
		$getCitizenCharterTwoScores_Resp->citizenCharterTwoScores_Array = $citizenCharterTwoScores_Array;

		echo json_encode($getCitizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$getCitizenCharterTwoScores_Resp = new stdClass();
	$getCitizenCharterTwoScores_Resp->execution = null;
	$getCitizenCharterTwoScores_Resp->globalTokenResult = null;
	$getCitizenCharterTwoScores_Resp->citizenCharterTwoScores_Array = array();

	echo json_encode($getCitizenCharterTwoScores_Resp, JSON_NUMERIC_CHECK);
}
?>