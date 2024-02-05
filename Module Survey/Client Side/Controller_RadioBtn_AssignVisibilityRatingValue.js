/*Import*/
import {resetHelpfulnessRatingViaId, resetVisibilityRatingViaId, valueVisibilityRatingViaId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignVisibilityRatingValue(selectedCcVisibilityRate_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		resetHelpfulnessRatingViaId();	
		valueVisibilityRatingViaId(selectedCcVisibilityRate_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetVisibilityRatingViaId();
		resetHelpfulnessRatingViaId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignVisibilityRatingValue = controller_RadioBtn_AssignVisibilityRatingValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignVisibilityRatingValue;
/*Export*/