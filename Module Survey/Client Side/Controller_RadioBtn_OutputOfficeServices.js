/*Import*/
import {submittedRate} from "./Values_Survey.js";
import {submitOfficeServices} from "./SubmitRequest_OfficeServices.js";
import outputOfficeServicesRadioBtn from "./Output_OfficeServicesRadioBtn.js";
import outputOfficeServicesRadioBtnLoader from "./Output_OfficeServicesRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_OutputOfficeServices(){

	submitOfficeServices(outputOfficeServicesRadioBtn, outputOfficeServicesRadioBtnLoader, "officeServicesRadioBtnLoader-Id", submittedRate.respondentDetails.serviceTypeId, submittedRate.respondentDetails.clientTypeId, submittedRate.respondentDetails.officeId);
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_OutputOfficeServices = controller_RadioBtn_OutputOfficeServices;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_OutputOfficeServices;
/*Export*/