const submitRequestRespondentType = (selectedRespondentType_Base) =>{
	const selectedRespondentType_Obj = JSON.parse(atob(selectedRespondentType_Base));

	const selectedRespondent_ClientTypeId = selectedRespondentType_Obj.clienttype_id;

	gatewayRespondentType(selectedRespondent_ClientTypeId);
}