/*Import*/
import {resetServiceTypeId, resetRespondentId, valueRespondentId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignRespondentValue(selectedRespondent_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");

	resetServiceTypeId();

	if(radioBtnElement_Checked == "true"){

		valueRespondentId(selectedRespondent_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetRespondentId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignRespondentValue = controller_RadioBtn_AssignRespondentValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignRespondentValue;
/*Export*/