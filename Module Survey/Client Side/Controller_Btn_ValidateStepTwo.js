/*Import*/
import {submittedRate} from "./Values_Survey.js";
import controller_Btn_Steps from "./Controller_Btn_Steps.js";
import controller_Btn_PopulateRespondentRatings from "./Controller_Btn_PopulateRespondentRatings.js";
import controller_Btn_AssignRequiredQuestionsGroupsValue from "./Controller_Btn_AssignRequiredQuestionsGroupsValue.js";
import {submitQuestions} from "./SubmitRequest_Questions.js";
import {submitScores} from "./SubmitRequest_Scores.js";
import outputQuestionsScoresRadioBtn from "./Output_QuestionsScoresRadioBtn.js";
import outputQuestionsScoresRadioBtnLoader from "./Output_QuestionsScoresRadioBtnLoader.js";
/*Import*/


/*Prep variables*/
var proceedToStepThree = false;
/*Prep variables*/


/*Controller*/
function controller_Btn_ValidateStepTwo(){

	for(let key in submittedRate.ccRate){

		if(submittedRate.ccRate[key] == ""){
			
			alert("Please complete the rating for Citizen Charters.");
			proceedToStepThree = false;
			break;

		}else if(submittedRate.ccRate[key] != ""){
						
			proceedToStepThree = true;			
		}
	}

	
	if(proceedToStepThree === true){
		
		controller_Btn_Steps("next");

		const controllers_Array = [controller_Btn_PopulateRespondentRatings, controller_Btn_AssignRequiredQuestionsGroupsValue];

		submitQuestions(outputQuestionsScoresRadioBtn, outputQuestionsScoresRadioBtnLoader, "questionsScoresRadioBtnLoader", submittedRate.respondentDetails.officeId, submittedRate.respondentDetails.clientTypeId, submitScores, controllers_Array);
	}
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_ValidateStepTwo = controller_Btn_ValidateStepTwo;
/*Declare Global*/


/*Export*/
export default controller_Btn_ValidateStepTwo;
/*Export*/