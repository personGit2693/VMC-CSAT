/*Import*/
import {valueRequiredQuestionsGroups} from "./Values_Survey.js";
import {questionDetails_Array} from "./Request_Questions.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_AssignRequiredQuestionsGroupsValue(){

	let createdQuestionsGroups_Array = [];

	for(let index=0; questionDetails_Array.length > index; index++){
		
		if(createdQuestionsGroups_Array.includes(questionDetails_Array[index].questionsgroup_id) == false && questionDetails_Array[index].hide_question_id == 0){

			createdQuestionsGroups_Array.push(questionDetails_Array[index].questionsgroup_id);
		}
	}

	valueRequiredQuestionsGroups(createdQuestionsGroups_Array);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_AssignRequiredQuestionsGroupsValue = controller_Btn_AssignRequiredQuestionsGroupsValue;
/*Declare Global*/


/*Export*/
export default controller_Btn_AssignRequiredQuestionsGroupsValue;
/*Export*/