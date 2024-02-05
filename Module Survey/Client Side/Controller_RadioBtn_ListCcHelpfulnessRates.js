/*Import*/
import {cc2TriggerNotApp_QuestionRateId, submittedRate} from "./Values_Survey.js";
import {cc3RadioBtnsWrap} from "./Elements_Page_RateServey.js";
import {submitHelpfulnessRates} from "./SubmitRequest_HelpfulnessRates.js";
import outputHelpfulnessRatesRadioBtn from "./Output_HelpfulnessRatesRadioBtn.js";
import outputHelpfulnessRatesRadioBtnLoader from "./Output_HelpfulnessRatesRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_ListCcHelpfulnessRates(){

	if(submittedRate.ccRate.visibilityRatingViaId == cc2TriggerNotApp_QuestionRateId){

		cc3RadioBtnsWrap.innerHTML = "Not Applicable";

	}else if(submittedRate.ccRate.visibilityRatingViaId == ""){

		cc3RadioBtnsWrap.innerHTML = "Select CC2 first.";

	}else if(submittedRate.ccRate.visibilityRatingViaId != "" && submittedRate.ccRate.visibilityRatingViaId != cc2TriggerNotApp_QuestionRateId){
		
		submitHelpfulnessRates(outputHelpfulnessRatesRadioBtn, outputHelpfulnessRatesRadioBtnLoader, "helpfulnessRatesRadioBtnLoader-Id");
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_ListCcHelpfulnessRates = controller_RadioBtn_ListCcHelpfulnessRates;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_ListCcHelpfulnessRates;
/*Export*/