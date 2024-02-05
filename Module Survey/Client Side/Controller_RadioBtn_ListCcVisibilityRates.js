/*Import*/
import {cc1TriggerNotApp_QuestionRateId, submittedRate} from "./Values_Survey.js";
import {cc3RadioBtnsWrap, cc2RadioBtnsWrap} from "./Elements_Page_RateServey.js";
import {submitVisibilityRates} from "./SubmitRequest_VisibilityRates.js";
import outputVisibilityRatesRadioBtn from "./Output_VisibilityRatesRadioBtn.js";
import outputVisibilityRatesRadioBtnLoader from "./Output_VisibilityRatesRadioBtnLoader.js";
/*Import*/


/*Controller*/
function controller_RadioBtn_ListCcVisibilityRates(){

	if(submittedRate.ccRate.awarenessRatingViaId == cc1TriggerNotApp_QuestionRateId){

		cc2RadioBtnsWrap.innerHTML = "Not Applicable";
		cc3RadioBtnsWrap.innerHTML = "Not Applicable";

	}else if(submittedRate.ccRate.awarenessRatingViaId == ""){

		cc2RadioBtnsWrap.innerHTML = "Select CC1 first.";
		cc3RadioBtnsWrap.innerHTML = "Select CC2 first.";

	}else if(submittedRate.ccRate.awarenessRatingViaId != "" && submittedRate.ccRate.awarenessRatingViaId != cc1TriggerNotApp_QuestionRateId){

		cc3RadioBtnsWrap.innerHTML = "Select CC2 first.";
		
		submitVisibilityRates(outputVisibilityRatesRadioBtn, outputVisibilityRatesRadioBtnLoader, "visibilityRatesRadioBtnLoader-Id");
	}
}
/*Controller*/


/*Declare Global*/
window.controller_RadioBtn_ListCcVisibilityRates = controller_RadioBtn_ListCcVisibilityRates;
/*Declare Global*/


/*Export*/
export default controller_RadioBtn_ListCcVisibilityRates;
/*Export*/