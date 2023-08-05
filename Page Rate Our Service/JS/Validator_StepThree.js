/*Import*/
import {questionGroups, selectedQuestionGroups} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorStepThree(){
	let validationResult = true;

	for(let index=0; index<questionGroups.length; index++){
		if(selectedQuestionGroups.includes(questionGroups[index]) == false){
			validationResult = false;
			break;
		}
	}

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorStepThree = validatorStepThree;
/*Declare global*/