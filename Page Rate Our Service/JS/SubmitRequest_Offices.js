const submitRequestOffices = (selectedFloor_Base) =>{
	const selectedFloor_Obj = JSON.parse(atob(selectedFloor_Base));

	const selectedFloor_Id = selectedFloor_Obj.floorId;

	gatewayOffices(selectedFloor_Id);
}