<?php 

/*For Updating the specific question*/
function updateQuestion(object $vmcCsat_Conn, int $questionId, string $newQuestion){
	
	/*Prep return*/
	$updateQuestion_Resp = new stdClass();
	$updateQuestion_Resp->execution = null;	
	$updateQuestion_Resp->count = 0;	

	$count = 0;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Update question*/
	/*_Prep query*/
	$updateQuestion_Query = "UPDATE questions_tab SET question_value = :newQuestion WHERE question_id = :questionId;";
	/*_Prep query*/

	/*_Execute query*/
	$updateQuestion_QueryObj = $vmcCsat_Conn->prepare($updateQuestion_Query);
	$updateQuestion_QueryObj->bindValue(':questionId', intval($questionId), PDO::PARAM_INT);
	$updateQuestion_QueryObj->bindValue(':newQuestion', $newQuestion, PDO::PARAM_STR);	
	$execution = $updateQuestion_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		$count = $updateQuestion_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Update question*/


	/*Return response*/
	$updateQuestion_Resp->execution = $execution;	
	$updateQuestion_Resp->count = $count;

	return $updateQuestion_Resp;
	/*Return response*/
}
/*For Updating the specific question*/

?>