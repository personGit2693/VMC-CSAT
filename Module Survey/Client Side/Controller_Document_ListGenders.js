/*Import*/
import {submitGenders} from "./SubmitRequest_Genders.js";
import outputGendersRadioBtn from "./Output_GendersRadioBtn.js";
import outputGendersRadioBtnLoader from "./Output_GendersRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_Document_ListGenders(){

	submitGenders(outputGendersRadioBtn, outputGendersRadioBtnLoader, "gendersRadioBtnLoader-Id");	
}
/*Controller*/


/*Declare Global*/
window.controller_Document_ListGenders = controller_Document_ListGenders;
/*Declare Global*/


/*Export*/
export default controller_Document_ListGenders;
/*Export*/