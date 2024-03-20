/*Import*/
import {assignInputCode} from "./Values_Index.js";
import {submitCheckBypassDevice} from "./Submit_CheckBypassDevice.js";
import controller_Document_ShowInputCodeModal from "./Controller_Document_ShowInputCodeModal.js";
import controller_Document_ShowRateOurServBtn from "./Controller_Document_ShowRateOurServBtn.js";
/*Import*/


/*Controller check bypass if set then generate auto passcode*/
function controller_Document_CheckBypassDevice(){
	
	submitCheckBypassDevice(assignInputCode, controller_Document_ShowInputCodeModal, controller_Document_ShowRateOurServBtn);
}
/*Controller check bypass if set then generate auto passcode*/


/*Declare Global*/
window.controller_Document_CheckBypassDevice = controller_Document_CheckBypassDevice;
/*Declare Global*/


/*Export*/
export default controller_Document_CheckBypassDevice;
/*Export*/