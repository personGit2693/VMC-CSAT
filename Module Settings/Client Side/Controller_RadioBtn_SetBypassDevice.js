/*Import*/
import {submitSetBypassDevice} from "./Submit_SetBypassDevice.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_SetBypassDevice(elem, checkCusCheckBox){

	const dataObj = {elem};
	const controllersObj = {checkCusCheckBox};
	const loaderObj = {};

	submitSetBypassDevice(controller_RadioBtn_SetBypassDevice, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_SetBypassDevice = controller_RadioBtn_SetBypassDevice;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_SetBypassDevice;
/*Export*/
