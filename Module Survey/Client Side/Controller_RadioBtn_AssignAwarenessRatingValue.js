/*Import*/
import {resetHelpfulnessRatingViaId, resetVisibilityRatingViaId, resetAwarenessRatingViaId, valueAwarenessRatingViaId} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_AssignAwarenessRatingValue(selectedCcAwarenessRate_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");
	
	if(radioBtnElement_Checked == "true"){

		resetVisibilityRatingViaId();
		resetHelpfulnessRatingViaId();	
		valueAwarenessRatingViaId(selectedCcAwarenessRate_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetAwarenessRatingViaId();
		resetVisibilityRatingViaId();
		resetHelpfulnessRatingViaId();
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignAwarenessRatingValue = controller_RadioBtn_AssignAwarenessRatingValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignAwarenessRatingValue;
/*Export*/