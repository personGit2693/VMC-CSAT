/*Import*/
import {submitEducAttainments} from "./SubmitRequest_EducAttainments.js";
import outputEducAttainmentsRadioBtn from "./Output_EducAttainmentsRadioBtn.js";
import outputEducAttainmentsRadioBtnLoader from "./Output_EducAttainmentsRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_Document_ListEducAttainments(){

	submitEducAttainments(outputEducAttainmentsRadioBtn, outputEducAttainmentsRadioBtnLoader, "educAttainmentsRadioBtnLoader-Id");	
}
/*Controller*/


/*Declare Global*/
window.controller_Document_ListEducAttainments = controller_Document_ListEducAttainments;
/*Declare Global*/


/*Export*/
export default controller_Document_ListEducAttainments;
/*Export*/