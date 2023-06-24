const submitRequestFloors = (selectedBuilding_Base) =>{
	const selectedBuilding_Obj = JSON.parse(atob(selectedBuilding_Base));

	const selectedBuilding_Id = selectedBuilding_Obj.building_id;

	gatewayFloors(selectedBuilding_Id);
}