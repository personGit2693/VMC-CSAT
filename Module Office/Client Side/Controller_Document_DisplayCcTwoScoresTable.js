/*Import*/
import {ccTwo_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterTwoScores} from "./SubmitRequest_CitizenCharterTwoScores.js";
import outputCitizenCharterTwoScoresTable from "./Output_CitizenCharterTwoScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcTwoScoresTable(){

	submitCitizenCharterTwoScores(outputCitizenCharterTwoScoresTable, selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, ccTwo_Id);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcTwoScoresTable = controller_Document_DisplayCcTwoScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcTwoScoresTable;
/*Export*/