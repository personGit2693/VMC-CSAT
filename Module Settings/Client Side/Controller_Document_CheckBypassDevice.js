/*Import*/
import {assignBypassPassCode} from "./Values_Settings.js";
import {submitCheckBypassDevice} from "./Submit_CheckBypassDevice.js";
/*Import*/


/*Controller*/
function controller_Document_CheckBypassDevice(elem, checkCusCheckBox){

	const dataObj = {elem};
	const controllersObj = {assignBypassPassCode, checkCusCheckBox};
	const loaderObj = {};

	submitCheckBypassDevice(controller_Document_CheckBypassDevice, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_CheckBypassDevice = controller_Document_CheckBypassDevice;
/*Declare Global*/


/*Export*/
export default controller_Document_CheckBypassDevice;
/*Export*/
