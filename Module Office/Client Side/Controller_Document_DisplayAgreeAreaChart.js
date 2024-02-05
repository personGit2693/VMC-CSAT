/*Import*/
import {valueAgreeNumberDetails, selectedPointOfEntry_Obj, agree_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetAgreeNumber} from "./SubmitRequest_GetAgreeNumber.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputAgreeNumberAreaChart from "./Output_AgreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayAgreeAreaChart(){

	submitGetAgreeNumber(outputAgreeNumberAreaChart, valueAgreeNumberDetails, clientTypeInternal, clientTypeExternal, selectedPointOfEntry_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, agree_Id, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayAgreeAreaChart = controller_Document_DisplayAgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayAgreeAreaChart;
/*Export*/