/*Import*/
import {visibilityRatingViaId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorRequestHelpfulnessRates(){
	let validationResult = true;

	if(visibilityRatingViaId == 8){
		validationResult = false;
	}

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorRequestHelpfulnessRates = validatorRequestHelpfulnessRates;
/*Declare global*/