/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_TotalAnsweredQuestions_Path, noRating_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitTotalAnsweredQuestions} from "./Submit_TotalAnsweredQuestions.js";
import outputTotalAnsweredQuestionsSpan from "./Output_TotalAnsweredQuestionsSpan.js";
import controller_Document_DisplayRating from "./Controller_Document_DisplayRating.js";
/*Import*/


/*Controller*/
function controller_Document_CountTotalAnsweredQuestions(){

	const dataObj = {endpoint: response_TotalAnsweredQuestions_Path, token, officeId: selectedPointOfEntry_Obj.office_id, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {outputFn: outputTotalAnsweredQuestionsSpan, controllerDisplayRating: controller_Document_DisplayRating};
	const loaderObj = {};

	submitTotalAnsweredQuestions(controller_Document_CountTotalAnsweredQuestions, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_CountTotalAnsweredQuestions = controller_Document_CountTotalAnsweredQuestions;
/*Declare Global*/


/*Export*/
export default controller_Document_CountTotalAnsweredQuestions;
/*Export*/
