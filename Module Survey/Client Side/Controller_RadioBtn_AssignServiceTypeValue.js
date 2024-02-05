/*Import*/
import {resetOfficeServiceId, resetServiceTypeId, valueServiceTypeId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignServiceTypeValue(selectedServiceType_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	resetOfficeServiceId();

	if(radioBtnElement_Checked == "true"){

		valueServiceTypeId(selectedServiceType_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetServiceTypeId();
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignServiceTypeValue = controller_RadioBtn_AssignServiceTypeValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignServiceTypeValue;
/*Export*/