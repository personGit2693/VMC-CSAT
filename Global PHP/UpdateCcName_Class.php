<?php 

/*For Updating the specific Citizen Charter*/
function updateCcName(object $vmcCsat_Conn, string $citizenCharterId, string $newCitizenCharterName){
	
	/*Prep return*/
	$updateCcName_Resp = new stdClass();
	$updateCcName_Resp->execution = null;	
	$updateCcName_Resp->count = 0;	

	$count = 0;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Update Citizen Charter*/
	/*_Prep query*/
	$updateCcName_Query = "UPDATE ccquestions_tab SET ccquestion_question = :newCitizenCharterName WHERE ccquestion_id = :citizenCharterId;";
	/*_Prep query*/

	/*_Execute query*/
	$updateCcName_QueryObj = $vmcCsat_Conn->prepare($updateCcName_Query);
	$updateCcName_QueryObj->bindValue(':citizenCharterId', $citizenCharterId, PDO::PARAM_STR);
	$updateCcName_QueryObj->bindValue(':newCitizenCharterName', $newCitizenCharterName, PDO::PARAM_STR);	
	$execution = $updateCcName_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		$count = $updateCcName_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Update Citizen Charter*/


	/*Return response*/
	$updateCcName_Resp->execution = $execution;	
	$updateCcName_Resp->count = $count;

	return $updateCcName_Resp;
	/*Return response*/
}
/*For Updating the specific Citizen Charter*/

?>