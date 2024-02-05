/*Import*/
import {resetGenderPref, valueGenderPref} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignGenderPref(selectedGenderPref_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueGenderPref(selectedGenderPref_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetGenderPref();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignGenderPref = controller_RadioBtn_AssignGenderPref;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignGenderPref;
/*Export*/