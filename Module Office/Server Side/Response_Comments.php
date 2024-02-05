<?php 
/*Dependency PHP Codes*/
declare(strict_types=1);
date_default_timezone_set('Asia/Manila');
session_start();
$currentDateTime = date("Y-m-d H:i:s", time());
/*Dependency PHP Codes*/


/*Global Required Files*/
require_once "../../Global PHP/Global_Connection.php";
require_once "../../Global PHP/CheckGlobalToken_Class.php";
/*Global Required Files*/


if(isset($_POST["token"]) && isset($_POST["stronglyAgree_Id"]) && isset($_POST["agree_Id"]) && isset($_POST["noRating_Id"]) && isset($_POST["clientTypeInternal"]) && isset($_POST["clientTypeExternal"]) && isset($_POST["officeId"]) && isset($_POST["dateFrom"]) && isset($_POST["dateTo"]) && isset($_POST["commentStartIndex"]) && isset($_POST["commentDisplay"])){
	
	/*Required Files*/
	
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
	$stronglyAgree_Id = $_POST["stronglyAgree_Id"];
	$agree_Id = $_POST["agree_Id"];
	$noRating_Id = $_POST["noRating_Id"];
	/*Query string*/


	/*Prep variables*/
	$dbConnection = connectToDb("vmc_csat");

	if(isset($_SESSION["officeId"]) && $_SESSION["officeId"] != 0){

		$officeId = $_SESSION["officeId"];
	}
	/*Prep variables*/
	

	/*Prep response*/
	$comments_Resp = new stdClass();
	$comments_Resp->validAccess = true;
	$comments_Resp->serverConnection = $dbConnection->serverConnection;
	$comments_Resp->validToken = null;
	$comments_Resp->execution = null;	
	$comments_Resp->commentDetails_Array = array();

	$validToken = null;
	$execution = null;		
	$commentDetails_Array = array();	
	/*Prep response*/


	/*Check connection*/
	if($dbConnection->serverConnection != null){

		echo json_encode($comments_Resp, JSON_NUMERIC_CHECK);

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
		$comments_Resp->validToken = $validToken;

		echo json_encode($comments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;

	}else if($validateGlobalToken_Obj->counted === 0){

		$validToken = "Token can't be found!";
		$comments_Resp->validToken = $validToken;

		echo json_encode($comments_Resp, JSON_NUMERIC_CHECK);

		/*_Disconnect*/
		$dbConnection = null;
		/*_Disconnect*/

		return;
	}
	/*Validate token*/


	if($validToken === null){		
		
		if((!empty($clientTypeInternal) || !empty($clientTypeExternal)) && (!empty($dateFrom) && !empty($dateTo))){		
			
			/*Get Comment Details*/
			/*_Prep query*/
			$comments_Query = "SELECT clientresponses_tab.clientresponse_reference AS 'referenceNo',
				offices_tab.office_value AS 'office',
				offices_tab.office_abbre AS 'officeAbre',
				respondents_tab.respondent_name AS 'respType',
				ageranges_tab.agerange_value AS 'ageRangeValue',
				genders_tab.gender_value AS 'gender',
				clienttypes_tab.clienttype_value AS 'clientType',
				questions_tab.question_value AS 'question',
				commentsresponses_tab.commentresponse_id AS 'commentId',
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
					WHERE NOT score_id = :noRating_Id
					GROUP BY clientresponse_reference) 				   
				AS allcountedscores_tab 
				ON clientresponses_tab.clientresponse_reference = allcountedscores_tab.clientresponse_reference
				LEFT JOIN (SELECT clientresponse_reference AS 'clientresponse_reference', 
					COUNT(questionresponse_id) AS 'allPassScore' 
					FROM questionresponses_tab  
					WHERE score_id = :stronglyAgree_Id OR score_id = :agree_Id
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
			$comments_QueryObj = $dbConnection->selectedPdoConn->prepare($comments_Query);
			$comments_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':clientTypeInternal', intval($clientTypeInternal), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':clientTypeExternal', intval($clientTypeExternal), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':dateFrom', $dateFrom, PDO::PARAM_STR);
			$comments_QueryObj->bindValue(':dateTo', $dateTo, PDO::PARAM_STR);
			$comments_QueryObj->bindValue(':commentStartIndex', intval($commentStartIndex), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':commentDisplay', intval($commentDisplay), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':noRating_Id', intval($noRating_Id), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':stronglyAgree_Id', intval($stronglyAgree_Id), PDO::PARAM_INT);
			$comments_QueryObj->bindValue(':agree_Id', intval($agree_Id), PDO::PARAM_INT);
			$execution = $comments_QueryObj->execute();
			/*_Execute query*/

			/*_Fetching*/
			if($execution){

				while($comments_Assoc = $comments_QueryObj->fetch(PDO::FETCH_ASSOC)){

					$commentDetails_Array[] = $comments_Assoc;
				}
			}
			/*_Fetching*/
			/*Get Comment Details*/
		}
	}
	

	/*Disconnect*/
	$dbConnection = null;
	/*Disconnect*/


	/*Return response*/
	$comments_Resp->execution = $execution;
	$comments_Resp->commentDetails_Array = $commentDetails_Array;

	echo json_encode($comments_Resp, JSON_NUMERIC_CHECK);
	/*Return response*/

}else if(!isset($_POST["token"]) || !isset($_POST["stronglyAgree_Id"]) || !isset($_POST["agree_Id"]) || !isset($_POST["noRating_Id"]) || !isset($_POST["clientTypeInternal"]) || !isset($_POST["clientTypeExternal"]) || !isset($_POST["dateFrom"]) || !isset($_POST["dateTo"]) || !isset($_POST["officeId"]) || !isset($_POST["commentStartIndex"]) || !isset($_POST["commentDisplay"])){
	
	$comments_Resp = new stdClass();
	$comments_Resp->validAccess = false;
	$comments_Resp->serverConnection = null;
	$comments_Resp->validToken = null;
	$comments_Resp->execution = null;	
	$comments_Resp->commentDetails_Array = null;

	echo json_encode($comments_Resp, JSON_NUMERIC_CHECK);
}
?>