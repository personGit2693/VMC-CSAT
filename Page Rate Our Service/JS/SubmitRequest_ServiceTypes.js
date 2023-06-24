const submitRequestServiceTypes = (selectedOffice_Base) =>{
	const selectedOffice_Obj = JSON.parse(atob(selectedOffice_Base));

	const selectedOffice_Id = selectedOffice_Obj.office_id;

	gatewayServiceTypes(selectedOffice_Id);
}