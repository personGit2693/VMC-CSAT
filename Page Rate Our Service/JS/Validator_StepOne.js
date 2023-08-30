/*Import*/
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorStepOne(){
	let validationResult = false;

	for(let key in submittedRate.respondentDetails){
		if(submittedRate.respondentDetails[key] == "" && key != "clientResponseRef" && key != "religionId" && key != "contactDetails"){
			validationResult = false;
			break;
		}else if(submittedRate.respondentDetails[key] != "" && key != "clientResponseRef" && key != "religionId" && key != "contactDetails"){
			validationResult = true;			
		}
	}	

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorStepOne = validatorStepOne;
/*Declare global*/