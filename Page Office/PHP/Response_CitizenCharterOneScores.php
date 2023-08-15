<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
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


	/*Prep response*/
	$getCitizenCharterOneScores_Resp = new stdClass();
	$getCitizenCharterOneScores_Resp->execution = null;
	$getCitizenCharterOneScores_Resp->globalTokenResult = null;
	$getCitizenCharterOneScores_Resp->citizenCharterOneScores_Array = array();
	$getCitizenCharterOneScores_Resp->serverConnection = $serverConnection;

	$execution = null;
	$globalTokenResult = null;
	$citizenCharterOneScores_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getCitizenCharterOneScores_Resp);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getCitizenCharterOneScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCitizenCharterOneScores_Resp);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getCitizenCharterOneScores_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCitizenCharterOneScores_Resp);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Questions scores*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($overallFromDate) && !empty($overallToDate))){		
			/*_Prep query*/
			$getCitizenCharterOneScores_Query = "
				SELECT ccquestionsrates_tab.ccquestionsrate_value AS 'ccRate', 
				ccquestions_tab.ccquestion_question AS 'ccQuestion',
				ccquestionsrates_tab.ccquestion_id AS 'ccNumber',
				ccquestionsrates_tab.ccquestionsrate_id AS 'ccRateId',
				COUNT(ccresponses_tab.ccresponse_id) AS 'responses'
				FROM clientresponses_tab 
				INNER JOIN ccresponses_tab 
				ON clientresponses_tab.clientresponse_reference = ccresponses_tab.clientresponse_reference 
				INNER JOIN ccquestionsrates_tab 
				ON ccresponses_tab.ccquestionsrate_id = ccquestionsrates_tab.ccquestionsrate_id 
				INNER JOIN ccquestions_tab 
				ON ccquestionsrates_tab.ccquestion_id = ccquestions_tab.ccquestion_id
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				AND CONVERT(ccresponses_tab.ccresponse_datetime, DATE) BETWEEN CONVERT(:overallFromDate, DATE) AND CONVERT(:overallToDate, DATE)  
				AND ccquestionsrates_tab.ccquestion_id = 'CC1'
				GROUP BY ccquestionsrates_tab.ccquestionsrate_id 
				ORDER BY ccquestionsrates_tab.ccquestion_id;			
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getCitizenCharterOneScores_QueryObj = $vmcCsat_Conn->prepare($getCitizenCharterOneScores_Query);
			$getCitizenCharterOneScores_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getCitizenCharterOneScores_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getCitizenCharterOneScores_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getCitizenCharterOneScores_QueryObj->bindValue(':overallFromDate', $overallFromDate, PDO::PARAM_STR);
			$getCitizenCharterOneScores_QueryObj->bindValue(':overallToDate', $overallToDate, PDO::PARAM_STR);
			$execution = $getCitizenCharterOneScores_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($citizenCharterOneScores_Assoc = $getCitizenCharterOneScores_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$citizenCharterOneScores_Array[] = $citizenCharterOneScores_Assoc;
				}
			}
			/*_Fetching*/
		}
		/*Get Questions scores*/
		

		/*_Return response*/
		$getCitizenCharterOneScores_Resp->execution = $execution;
		$getCitizenCharterOneScores_Resp->globalTokenResult = $globalTokenResult;
		$getCitizenCharterOneScores_Resp->citizenCharterOneScores_Array = $citizenCharterOneScores_Array;

		echo json_encode($getCitizenCharterOneScores_Resp);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["overallFromDate"]) || !isset($_POST["overallToDate"]) || !isset($_POST["officeId"])){
	$getCitizenCharterOneScores_Resp = new stdClass();
	$getCitizenCharterOneScores_Resp->execution = null;
	$getCitizenCharterOneScores_Resp->globalTokenResult = null;
	$getCitizenCharterOneScores_Resp->citizenCharterOneScores_Array = array();

	echo json_encode($getCitizenCharterOneScores_Resp);
}
?>