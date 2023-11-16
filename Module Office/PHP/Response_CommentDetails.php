<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
session_start();
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


if(isset($_POST["token"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"]) && isset($_POST["commentStartIndex"]) && isset($_POST["commentDisplay"])){
	/*Required Files*/
	require_once "../../Global PHP/Connection.php";
	require_once "../../Global PHP/CheckGlobalToken_Class.php";
	/*Required Files*/


	/*Query string*/
	$token = $_POST["token"];
	$clientTypeInternal = $_POST["clientTypeInternal"];
	$clientTypeExternal = $_POST["clientTypeExternal"];
	$officeId = $_POST["officeId"];
	$dateFrom = $_POST["dateFrom"];
	$dateTo = $_POST["dateTo"];
	$commentStartIndex = $_POST["commentStartIndex"];
	$commentDisplay = $_POST["commentDisplay"];
	/*Query string*/


	/*Prep variables*/
	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){
		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/
	

	/*Prep response*/
	$getCommentDetails_Resp = new stdClass();
	$getCommentDetails_Resp->execution = null;
	$getCommentDetails_Resp->globalTokenResult = null;
	$getCommentDetails_Resp->commentDetails_Array = array();
	$getCommentDetails_Resp->serverConnection = $serverConnection;

	$execution = null;	
	$globalTokenResult = null;
	$commentDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($serverConnection != null){
		echo json_encode($getCommentDetails_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Check connection*/


	/*Validate global token*/
	$validateGlobalToken_Obj = validateGlobalToken($vmcCsat_Conn, $token);

	if($validateGlobalToken_Obj->execution !== true){
		$globalTokenResult = "Validating global token has execution problem!";
		$getCommentDetails_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCommentDetails_Resp, JSON_NUMERIC_CHECK);
		return;
	}else if($validateGlobalToken_Obj->counted === 0){
		$globalTokenResult = "Token can't be found!";
		$getCommentDetails_Resp->globalTokenResult = $globalTokenResult;

		echo json_encode($getCommentDetails_Resp, JSON_NUMERIC_CHECK);
		return;
	}
	/*Validate global token*/


	/*Valid global token*/
	if($globalTokenResult === null){		
		/*Get Comment Details*/
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			/*_Prep query*/
			$getCommentDetails_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'referenceNo',
				offices_tab.office_value AS 'office',
				offices_tab.office_abbre AS 'officeAbre',
				respondents_tab.respondent_name AS 'respType',
				ageranges_tab.agerange_value AS 'ageRangeValue',
				genders_tab.gender_value AS 'gender',
				clienttypes_tab.clienttype_value AS 'clientType',
				questions_tab.question_value AS 'question',
				commentsresponses_tab.commentresponse_value AS 'comment',
				commentsresponses_tab.commentresponse_datetime AS 'datetime',
				IFNULL(allcountedscores_tab.allCountedScore, 0) AS 'allCountedScore',
				IFNULL(allpassscore_tab.allPassScore, 0) AS 'allPassScore'
				FROM clientresponses_tab 
				INNER JOIN offices_tab 
				ON clientresponses_tab.office_id = offices_tab.office_id 
				INNER JOIN respondents_tab 
				ON clientresponses_tab.respondent_id = respondents_tab.respondent_id 
				INNER JOIN ageranges_tab 
				ON clientresponses_tab.agerange_id = ageranges_tab.agerange_id 
				INNER JOIN genders_tab 
				ON clientresponses_tab.gender_id = genders_tab.gender_id 
				INNER JOIN clienttypes_tab 
				ON clientresponses_tab.clienttype_id = clienttypes_tab.clienttype_id 
				INNER JOIN commentsresponses_tab 
				ON clientresponses_tab.clientresponse_reference = commentsresponses_tab.clientresponse_reference
				INNER JOIN questions_tab 
				ON commentsresponses_tab.question_id = questions_tab.question_id 
				LEFT JOIN (SELECT clientresponse_reference AS 'clientresponse_reference', 
					COUNT(questionresponse_id) AS 'allCountedScore' 
				    FROM questionresponses_tab  
					WHERE NOT score_id = 6
					GROUP BY clientresponse_reference) 				   
				AS allcountedscores_tab 
				ON clientresponses_tab.clientresponse_reference = allcountedscores_tab.clientresponse_reference
				LEFT JOIN (SELECT clientresponse_reference AS 'clientresponse_reference', 
					COUNT(questionresponse_id) AS 'allPassScore' 
					FROM questionresponses_tab  
					WHERE score_id = 1 OR score_id = 2
					GROUP BY clientresponse_reference)				    
				AS allpassscore_tab 
				ON clientresponses_tab.clientresponse_reference = allpassscore_tab.clientresponse_reference
				WHERE clientresponses_tab.office_id = :officeId 
				AND (clientresponses_tab.clienttype_id = :clientTypeInternal OR clientresponses_tab.clienttype_id = :clientTypeExternal)
				AND CONVERT(commentsresponses_tab.commentresponse_datetime, DATE) BETWEEN CONVERT(:dateFrom, DATE) AND CONVERT(:dateTo, DATE) 
				ORDER BY commentsresponses_tab.commentresponse_datetime DESC 
				LIMIT :commentStartIndex, :commentDisplay;
			"; 							
			/*_Prep query*/

			/*_Execute query*/
			$getCommentDetails_QueryObj = $vmcCsat_Conn->prepare($getCommentDetails_Query);
			$getCommentDetails_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$getCommentDetails_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$getCommentDetails_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$getCommentDetails_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$getCommentDetails_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$getCommentDetails_QueryObj->bindValue(':commentStartIndex', intval($commentStartIndex), PDO::PARAM_INT);
			$getCommentDetails_QueryObj->bindValue(':commentDisplay', intval($commentDisplay), PDO::PARAM_INT);
			$execution = $getCommentDetails_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){				
				while($commentDetails_Assoc = $getCommentDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){
					$commentDetails_Array[] = $commentDetails_Assoc;
				}
			}
			/*_Fetching*/
		}
		/*Get Comment Details*/
		

		/*_Return response*/
		$getCommentDetails_Resp->execution = $execution;
		$getCommentDetails_Resp->globalTokenResult = $globalTokenResult;
		$getCommentDetails_Resp->commentDetails_Array = $commentDetails_Array;

		echo json_encode($getCommentDetails_Resp, JSON_NUMERIC_CHECK);
		/*_Return response*/
	}
	/*Valid global token*/
}else if(!isset($_POST["token"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"]) || !isset($_POST["commentStartIndex"]) || !isset($_POST["commentDisplay"])){
	$getCommentDetails_Resp = new stdClass();
	$getCommentDetails_Resp->execution = null;
	$getCommentDetails_Resp->globalTokenResult = null;
	$getCommentDetails_Resp->commentDetails_Array = array();

	echo json_encode($getCommentDetails_Resp, JSON_NUMERIC_CHECK);
}
?>