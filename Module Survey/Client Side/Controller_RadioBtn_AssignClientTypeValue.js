/*Import*/
import {resetClientTypeId, valueClientTypeId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignClientTypeValue(selectedRespondent_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");

	if(radioBtnElement_Checked == "true"){

		valueClientTypeId(selectedRespondent_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetClientTypeId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignClientTypeValue = controller_RadioBtn_AssignClientTypeValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignClientTypeValue;
/*Export*/