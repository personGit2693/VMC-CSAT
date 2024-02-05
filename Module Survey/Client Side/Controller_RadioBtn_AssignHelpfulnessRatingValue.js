/*Import*/
import {resetHelpfulnessRatingViaId, valueHelpfulnessRatingViaId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignHelpfulnessRatingValue(selectedCcHelpfulnessRate_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		valueHelpfulnessRatingViaId(selectedCcHelpfulnessRate_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetHelpfulnessRatingViaId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignHelpfulnessRatingValue = controller_RadioBtn_AssignHelpfulnessRatingValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignHelpfulnessRatingValue;
/*Export*/