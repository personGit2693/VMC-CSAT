/*Import*/
import {ccOne_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterOneScores} from "./SubmitRequest_CitizenCharterOneScores.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputCitizenCharterOneScoresTable from "./Output_CitizenCharterOneScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcOneScoresTable(){

	submitCitizenCharterOneScores(outputCitizenCharterOneScoresTable, selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, ccOne_Id, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcOneScoresTable = controller_Document_DisplayCcOneScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcOneScoresTable;
/*Export*/