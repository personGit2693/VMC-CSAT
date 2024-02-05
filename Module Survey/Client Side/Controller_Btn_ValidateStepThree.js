/*Import*/
import {requiredQuestionsGroups_Array, selectedQuestionsGroups_Array} from "./Values_Survey.js";
import controller_Btn_ListCommentsQuestions from "./Controller_Btn_ListCommentsQuestions.js";
/*Import*/


/*Prep variables*/
var proceedToStepFour = false;
/*Prep variables*/


/*Controller*/
function controller_Btn_ValidateStepThree(){

	const selectedQuestionsGroupsdId_Array = selectedQuestionsGroups_Array.map(function(value, index, array){

		const value_Obj = JSON.parse(atob(value));

		return value_Obj.questionsgroup_id;
	});


	const allQuestionsGroupsFilled = requiredQuestionsGroups_Array.every(function(value, index, array){

		return selectedQuestionsGroupsdId_Array.includes(value) == true;
	});


	proceedToStepFour = allQuestionsGroupsFilled;

	
	if(proceedToStepFour === true){
		
		controller_Btn_Steps("next");

		controller_Btn_ListCommentsQuestions();

	}else if(proceedToStepFour === false){

		alert("Incomplete rating! Please select at least one rating per group.");
	}
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_ValidateStepThree = controller_Btn_ValidateStepThree;
/*Declare Global*/


/*Export*/
export default controller_Btn_ValidateStepThree;
/*Export*/