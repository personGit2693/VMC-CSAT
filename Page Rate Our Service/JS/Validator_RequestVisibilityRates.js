/*Import*/
import {awarenessRatingViaId} from "../../Global JS/Values_Page_RateService.js";
/*Import*/


/*Validator*/
function validatorRequestVisibilityRates(){
	let validationResult = true;

	if(awarenessRatingViaId == 4){
		validationResult = false;
	}

	return validationResult;
}
/*Validator*/


/*Declare global*/
window.validatorRequestVisibilityRates = validatorRequestVisibilityRates;
/*Declare global*/