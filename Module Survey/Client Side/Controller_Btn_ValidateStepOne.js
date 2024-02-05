/*Import*/
import {submittedRate} from "./Values_Survey.js";
import controller_Btn_Steps from "./Controller_Btn_Steps.js";
import {submitAwarenessRates} from "./SubmitRequest_AwarenessRates.js";
import outputAwarenessRatesRadioBtn from "./Output_AwarenessRatesRadioBtn.js";
import outputAwarenessRatesRadioBtnLoader from "./Output_AwarenessRatesRadioBtnLoader.js";
/*Import*/


/*Prep variables*/
var proceedToStepTwo = false;
/*Prep variables*/


/*Controller*/
function controller_Btn_ValidateStepOne(){

	for(let key in submittedRate.respondentDetails){

		if(submittedRate.respondentDetails[key] == "" && key != "clientResponseRef" && key != "religionId" && key != "contactDetails"){
			
			alert("Please complete the mandatory fields.");
			proceedToStepTwo = false;
			break;

		}else if(submittedRate.respondentDetails[key] != "" && key != "clientResponseRef" && key != "religionId" && key != "contactDetails"){
						
			proceedToStepTwo = true;			
		}
	}

	
	if(proceedToStepTwo === true){
		
		controller_Btn_Steps("next");
		submitAwarenessRates(outputAwarenessRatesRadioBtn, outputAwarenessRatesRadioBtnLoader, "awarenessRatesRadioBtnLoader-Id");
	}
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_ValidateStepOne = controller_Btn_ValidateStepOne;
/*Declare Global*/


/*Export*/
export default controller_Btn_ValidateStepOne;
/*Export*/