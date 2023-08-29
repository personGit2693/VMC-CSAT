<?php 

/*Function for getting office details*/
function officeDetails(object $vmcCsat_Conn, int $officeId){
	/*Prep return*/
	$officeDetails_Resp = new stdClass();
	$officeDetails_Resp->officeName = null;
	$officeDetails_Resp->officeAbbre = null;
	$officeDetails_Resp->building = null;
	$officeDetails_Resp->floor = null;
	$officeDetails_Resp->execution = null;

	$officeName = "Admin Account";
	$officeAbbre = null;
	$building = null;
	$floor = null;
	$execution = null;
	/*Prep return*/


	/*Prep variables*/
	
	/*Prep variables*/


	/*Get office details*/
	/*_Prep query*/
	$getOfficeDetails_Query = "
		SELECT offices_tab.office_value AS 'office_value',
		offices_tab.office_abbre AS 'office_abbre',
		buildings_tab.building_name AS 'building_name',
		floors_tab.floor_value AS 'floor_value' 
		FROM offices_tab 
		INNER JOIN buildings_tab 
		ON offices_tab.building_id = buildings_tab.building_id 
		INNER JOIN floors_tab 
		ON offices_tab.floor_id = floors_tab.floor_id
		WHERE offices_tab.office_id = :officeId 
	";
	/*_Prep query*/

	/*_Execute query*/
	$getOfficeDetails_QueryObj = $vmcCsat_Conn->prepare($getOfficeDetails_Query);
	$getOfficeDetails_QueryObj->bindValue(':officeId', $officeId, PDO::PARAM_INT);
	$execution = $getOfficeDetails_QueryObj->execute();
	/*_Execute query*/

	/*_Fetch query*/
	if($execution){
		if($officeDetails_Assoc = $getOfficeDetails_QueryObj->fetch(PDO::FETCH_ASSOC)){
			$officeName = $officeDetails_Assoc["office_value"];
			$officeAbbre = $officeDetails_Assoc["office_abbre"];
			$building = $officeDetails_Assoc["building_name"];
			$floor = $officeDetails_Assoc["floor_value"];
		}
	}
	/*_Fetch query*/
	/*Get office details*/


	/*Return response*/
	$officeDetails_Resp->officeName = $officeName;
	$officeDetails_Resp->officeAbbre = $officeAbbre;
	$officeDetails_Resp->building = $building;
	$officeDetails_Resp->floor = $floor;
	$officeDetails_Resp->execution = $execution;

	return $officeDetails_Resp;
	/*Return response*/
}
/*Function for getting office details*/

?>