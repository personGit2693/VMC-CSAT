/*Import*/
import {submittedRate} from "./Values_Survey.js";
import {submitServiceTypes} from "./SubmitRequest_ServiceTypes.js";
import outputServiceTypesRadioBtn from "./Output_ServiceTypesRadioBtn.js";
import outputServiceTypesRadioBtnLoader from "./Output_ServiceTypesRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_OutputServiceTypes(){
	
	submitServiceTypes(outputServiceTypesRadioBtn, outputServiceTypesRadioBtnLoader, "serviceTypesRadioBtnLoader-Id", submittedRate.respondentDetails.respondentId, submittedRate.respondentDetails.clientTypeId, submittedRate.respondentDetails.officeId);
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_OutputServiceTypes = controller_RadioBtn_OutputServiceTypes;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_OutputServiceTypes;
/*Export*/