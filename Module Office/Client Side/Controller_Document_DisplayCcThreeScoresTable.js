/*Import*/
import {ccThree_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterThreeScores} from "./SubmitRequest_CitizenCharterThreeScores.js";
import outputCitizenCharterThreeScoresTable from "./Output_CitizenCharterThreeScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcThreeScoresTable(){

	submitCitizenCharterThreeScores(outputCitizenCharterThreeScoresTable, selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, ccThree_Id);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcThreeScoresTable = controller_Document_DisplayCcThreeScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcThreeScoresTable;
/*Export*/