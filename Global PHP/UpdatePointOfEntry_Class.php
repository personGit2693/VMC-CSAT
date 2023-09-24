<?php 

/*For Updating the specific point of entry*/
function updatePointOfEntry(object $vmcCsat_Conn, int $officeId, string $newPointOfEntryName){
	
	/*Prep return*/
	$updatePointOfEntry_Resp = new stdClass();
	$updatePointOfEntry_Resp->execution = null;	
	$updatePointOfEntry_Resp->count = 0;	

	$count = 0;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Update point of entry*/
	/*_Prep query*/
	$updatePointOfEntry_Query = "UPDATE offices_tab SET office_value = :newPointOfEntryName WHERE office_id = :officeId;";
	/*_Prep query*/

	/*_Execute query*/
	$updatePointOfEntry_QueryObj = $vmcCsat_Conn->prepare($updatePointOfEntry_Query);
	$updatePointOfEntry_QueryObj->bindValue(':officeId', intval($officeId), PDO::PARAM_INT);
	$updatePointOfEntry_QueryObj->bindValue(':newPointOfEntryName', $newPointOfEntryName, PDO::PARAM_STR);	
	$execution = $updatePointOfEntry_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		$count = $updatePointOfEntry_QueryObj->rowCount();
	}
	/*_Fetch query*/
	/*Update point of entry*/


	/*Return response*/
	$updatePointOfEntry_Resp->execution = $execution;	
	$updatePointOfEntry_Resp->count = $count;

	return $updatePointOfEntry_Resp;
	/*Return response*/
}
/*For Updating the specific point of entry*/

?>