/*Import*/
import {submitSetBypassDevice} from "./Submit_SetBypassDevice.js";
/*Import*/


/*Check or uncheck bypass code*/
function controller_RadioBtn_SetBypassDevice(elem, checkCusCheckBox){
	
	submitSetBypassDevice(elem, checkCusCheckBox);
}
/*Check or uncheck bypass code*/


/*Declare Global*/
window.controller_RadioBtn_SetBypassDevice = controller_RadioBtn_SetBypassDevice;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_SetBypassDevice;
/*Export*/