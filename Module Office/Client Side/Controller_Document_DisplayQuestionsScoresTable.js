/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_QuestionsScoresDetails_Path, dimensionComment_Id, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitQuestionsScoresDetails} from "./Submit_QuestionsScoresDetails.js";
import outputQuestionsScoresTable from "./Output_QuestionsScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayQuestionsScoresTable(){

	const dataObj = {endpoint: response_QuestionsScoresDetails_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id};
	const controllersObj = {outputFn: outputQuestionsScoresTable};
	const loaderObj = {};

	submitQuestionsScoresDetails(controller_Document_DisplayQuestionsScoresTable, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayQuestionsScoresTable = controller_Document_DisplayQuestionsScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayQuestionsScoresTable;
/*Export*/
