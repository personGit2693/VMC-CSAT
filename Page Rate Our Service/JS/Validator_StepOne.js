/*Import*/
import {submittedRate} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorStepOne(){
	let validationResult = true;

	for(let key in submittedRate.respondentDetails){
		if(submittedRate.respondentDetails[key] == "" && key != "clientResponseRef"){
			validationResult = false;
			break;
		}else if(submittedRate.respondentDetails[key] != "" && key != "clientResponseRef"){
			if(submittedRate.availedOfficeServices.length == 0){
				validationResult = false;
				break;
			}
		}
	}	

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorStepOne = validatorStepOne;
/*Declare global*/