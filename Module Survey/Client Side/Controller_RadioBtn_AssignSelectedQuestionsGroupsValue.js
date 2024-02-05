/*Import*/
import {resetSelectedQuestionsGroups, valueSelectedQuestionsGroups} from "./Values_Survey.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_RadioBtn_AssignSelectedQuestionsGroupsValue(selectedQuestionScore_Base, radioBtnElement){

	const radioBtnElement_Checked = radioBtnElement.getAttribute("data-rogridradio-check");

	if(radioBtnElement_Checked == "true"){

		valueSelectedQuestionsGroups(selectedQuestionScore_Base);

	}else if(radioBtnElement_Checked == "false"){

		resetSelectedQuestionsGroups(selectedQuestionScore_Base);
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_AssignSelectedQuestionsGroupsValue = controller_RadioBtn_AssignSelectedQuestionsGroupsValue;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_AssignSelectedQuestionsGroupsValue;
/*Export*/