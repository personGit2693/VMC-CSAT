/*Import*/
import {resetGender, valueGender} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignGender(selectedGender_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueGender(selectedGender_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetGender();
	}		
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignGender = controller_RadioBtn_AssignGender;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignGender;
/*Export*/