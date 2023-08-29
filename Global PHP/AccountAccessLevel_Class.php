<?php 

/*Function for getting account access level*/
function accountAccessLevel(object $vmcCsat_Conn, string $accountNumber){
	/*Prep return*/
	$accountAccessLevel_Resp = new stdClass();
	$accountAccessLevel_Resp->accountAccess = array();
	$accountAccessLevel_Resp->accessLevels = array("pointOfEntryDropdown"=>1,"reportsNav"=>2);
	$accountAccessLevel_Resp->execution = null;

	$accountAccess = array();
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Get office details*/
	/*_Prep query*/
	$getAccountAccessLevel_Query = "SELECT accesslevel_id FROM accesslevelstag_tab WHERE account_number = :accountNumber;";
	/*_Prep query*/

	/*_Execute query*/
	$getAccountAccessLevel_QueryObj = $vmcCsat_Conn->prepare($getAccountAccessLevel_Query);
	$getAccountAccessLevel_QueryObj->bindValue(':accountNumber', $accountNumber, PDO::PARAM_STR);
	$execution = $getAccountAccessLevel_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		while($accessLevel_Assoc = $getAccountAccessLevel_QueryObj->fetch(PDO::FETCH_ASSOC)){
			$accountAccess[] = $accessLevel_Assoc["accesslevel_id"];
		}
	}
	/*_Fetch query*/
	/*Get office details*/


	/*Return response*/
	$accountAccessLevel_Resp->accountAccess = $accountAccess;
	$accountAccessLevel_Resp->execution = $execution;

	return $accountAccessLevel_Resp;
	/*Return response*/
}
/*Function for getting account access level*/

?>