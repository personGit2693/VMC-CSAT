/*Import*/
import {resetRespondentRatings, valueRespondentRatings} from "./Values_Survey.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_RadioBtn_AssignRespondentRatingsValue(selectedQuestionScore_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");

	if(radioBtnElement_Checked == "true"){

		valueRespondentRatings(selectedQuestionScore_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetRespondentRatings(selectedQuestionScore_Base);
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignRespondentRatingsValue = controller_RadioBtn_AssignRespondentRatingsValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignRespondentRatingsValue;
/*Export*/