/*Import*/
import {submitCheckBypassDevice} from "./Submit_CheckBypassDevice.js";
import {assignBypassPassCode} from "./Values_Settings.js";
/*Import*/


/*Check if bypass code is set*/
function controller_Document_CheckBypassDevice(elem, checkCusCheckBox){
	
	submitCheckBypassDevice(elem, assignBypassPassCode, checkCusCheckBox);
}
/*Check if bypass code is set*/


/*Declare Global*/
window.controller_Document_CheckBypassDevice = controller_Document_CheckBypassDevice;
/*Declare Global*/


/*Export*/
export default controller_Document_CheckBypassDevice;
/*Export*/