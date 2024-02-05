/*Import*/
import {resetOfficeServiceId, valueOfficeServiceId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignOfficeServiceValue(selectedService_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueOfficeServiceId(selectedService_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetOfficeServiceId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignOfficeServiceValue = controller_RadioBtn_AssignOfficeServiceValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignOfficeServiceValue;
/*Export*/