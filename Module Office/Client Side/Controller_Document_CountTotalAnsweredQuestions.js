/*Import*/
import {noRating_Id, currentNewRespondent, clientTypeExternal, clientTypeInternal, selectedPointOfEntry_Obj} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitTotalAnsweredQuestions} from "./SubmitRequest_TotalAnsweredQuestions.js";
import outputTotalAnsweredQuestionsSpan from "./Output_TotalAnsweredQuestionsSpan.js";
import controller_Document_DisplayRating from "./Controller_Document_DisplayRating.js";
/*Import*/


/*Controller*/
function controller_Document_CountTotalAnsweredQuestions(){

	submitTotalAnsweredQuestions(outputTotalAnsweredQuestionsSpan, selectedPointOfEntry_Obj.office_id, noRating_Id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, controller_Document_DisplayRating);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_CountTotalAnsweredQuestions = controller_Document_CountTotalAnsweredQuestions;
/*Declare Global*/


/*Export*/
export default controller_Document_CountTotalAnsweredQuestions;
/*Export*/