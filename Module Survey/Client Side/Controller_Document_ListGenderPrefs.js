/*Import*/
import {submitGenderPrefs} from "./SubmitRequest_GenderPrefs.js";
import outputGenderPrefsRadioBtn from "./Output_GenderPrefsRadioBtn.js";
import outputGenderPrefsRadioBtnLoader from "./Output_GenderPrefsRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_Document_ListGenderPrefs(){

	submitGenderPrefs(outputGenderPrefsRadioBtn, outputGenderPrefsRadioBtnLoader, "genderPrefsRadioBtnLoader-Id");	
}
/*Controller*/


/*Declare Global*/
window.controller_Document_ListGenderPrefs = controller_Document_ListGenderPrefs;
/*Declare Global*/


/*Export*/
export default controller_Document_ListGenderPrefs;
/*Export*/