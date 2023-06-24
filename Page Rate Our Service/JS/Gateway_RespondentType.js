/*Import*/

/*Import*/


/*Prep export variables*/
var respondentTypeClientTypeId = null;
/*Prep export variables*/


/*Gateway*/
const gatewayRespondentType = (selectedRespondent_ClientTypeId) =>{
	respondentTypeClientTypeId = selectedRespondent_ClientTypeId;
}
/*Gateway*/


/*Declare global*/
window.gatewayRespondentType = gatewayRespondentType;
/*Declare global*/


/*Export*/
export {respondentTypeClientTypeId};
/*Export*/