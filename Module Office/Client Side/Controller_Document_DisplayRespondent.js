/*Import*/
import {currentNewRespondent, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitTotalRespondent} from "./SubmitRequest_TotalRespondent.js";
import outputRespondentSpan from "./Output_RespondentSpan.js";
import outputRespondentSpanLoader from "./Output_RespondentSpanLoader.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRespondent(){

	submitTotalRespondent(outputRespondentSpan, outputRespondentSpanLoader, "respondentSpanLoader-Id", selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRespondent = controller_Document_DisplayRespondent;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRespondent;
/*Export*/