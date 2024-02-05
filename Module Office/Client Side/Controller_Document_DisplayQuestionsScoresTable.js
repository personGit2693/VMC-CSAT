/*Import*/
import {dimensionComment_Id, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitQuestionsScoresDetails} from "./SubmitRequest_QuestionsScoresDetails.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputQuestionsScoresTable from "./Output_QuestionsScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayQuestionsScoresTable(){

	submitQuestionsScoresDetails(outputQuestionsScoresTable, selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayQuestionsScoresTable = controller_Document_DisplayQuestionsScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayQuestionsScoresTable;
/*Export*/