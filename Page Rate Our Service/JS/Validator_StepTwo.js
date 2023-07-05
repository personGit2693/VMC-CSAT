/*Import*/
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorStepTwo(){
	let validationResult = true;

	for(let key in submittedRate.ccRate){
		if(submittedRate.ccRate[key] == ""){
			validationResult = false;
			break;
		}
	}	

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorStepTwo = validatorStepTwo;
/*Declare global*/