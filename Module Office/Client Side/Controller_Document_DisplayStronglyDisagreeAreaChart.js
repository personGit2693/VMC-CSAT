/*Import*/
import {valueStronglyDisagreeNumberDetails, selectedPointOfEntry_Obj, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetStronglyDisagreeNumber} from "./SubmitRequest_GetStronglyDisagreeNumber.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputStronglyDisagreeNumberAreaChart from "./Output_StronglyDisagreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayStronglyDisgreeAreaChart(){

	submitGetStronglyDisagreeNumber(outputStronglyDisagreeNumberAreaChart, valueStronglyDisagreeNumberDetails, selectedPointOfEntry_Obj.office_id, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayStronglyDisgreeAreaChart = controller_Document_DisplayStronglyDisgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayStronglyDisgreeAreaChart;
/*Export*/