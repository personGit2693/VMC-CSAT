/*Import*/
import {resetOfficeId, valueOfficeId} from "./Values_Survey.js";
import {codeDetailsBase} from "./Request_RespondentTypes.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignOfficeValue(radioBtnElement){
	
	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueOfficeId(codeDetailsBase);

	}else if(radioBtnElement_Checked == "false"){

		resetOfficeId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignOfficeValue = controller_RadioBtn_AssignOfficeValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignOfficeValue;
/*Export*/