/*Import*/
import {valueClientResponseRef, submittedRate} from "./Values_Survey.js";
import {submitEncodeRespondentDetails} from "./SubmitRequest_EncodeRespondentDetails.js";
import {submitEncodeCcRatings} from "./SubmitRequest_EncodeCcRatings.js";
import {submitEncodeRespondentRatings} from "./SubmitRequest_EncodeRespondentRatings.js";
import {submitEncodeComments} from "./SubmitRequest_EncodeComments.js";
import {submitDeleteEncoded} from "./SubmitRequest_DeleteEncoded.js";
import {submitEncodeNewRespondent} from "./SubmitRequest_EncodeNewRespondent.js";
import {submitCheckEncodedAll} from "./SubmitRequest_CheckEncodedAll.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_SendSurveyRating(){

	const surveyRatingSender_Obj = {
		submitEncodeCcRatings: submitEncodeCcRatings,
		submitEncodeRespondentRatings: submitEncodeRespondentRatings,
		submitEncodeComments: submitEncodeComments,
		submitEncodeNewRespondent: submitEncodeNewRespondent,
		submitCheckEncodedAll: submitCheckEncodedAll,
		submitDeleteEncoded: submitDeleteEncoded		
	};

	valueClientResponseRef();
	
	submitEncodeRespondentDetails(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj)
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_SendSurveyRating = controller_Btn_SendSurveyRating;
/*Declare Global*/


/*Export*/
export default controller_Btn_SendSurveyRating;
/*Export*/