/*Import*/
import {resetEducationAttain, valueEducationAttain} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignEducAttainValue(selectedEducAttain_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueEducationAttain(selectedEducAttain_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetEducationAttain();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignEducAttainValue = controller_RadioBtn_AssignEducAttainValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignEducAttainValue;
/*Export*/