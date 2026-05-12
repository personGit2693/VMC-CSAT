/*Import*/
import {assignInputCode} from "./Values_Index.js";
import {submitCheckBypassDevice} from "./Submit_CheckBypassDevice.js";
import controller_Document_ShowInputCodeModal from "./Controller_Document_ShowInputCodeModal.js";
import controller_Document_ShowRateOurServBtn from "./Controller_Document_ShowRateOurServBtn.js";
/*Import*/


/*Controller*/
function controller_Document_CheckBypassDevice(){

	const dataObj = {};
	const controllersObj = {assignInputCode, showInputCodeModal: controller_Document_ShowInputCodeModal, showRateOurServBtn: controller_Document_ShowRateOurServBtn};
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
