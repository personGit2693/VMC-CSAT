/*Import*/
import {valueStronglyAgreeNumberDetails, selectedPointOfEntry_Obj, stronglyAgree_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetStronglyAgreeNumber} from "./SubmitRequest_GetStronglyAgreeNumber.js";
import outputStronglyAgreeNumberAreaChart from "./Output_StronglyAgreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayStronglyAgreeAreaChart(){

	submitGetStronglyAgreeNumber(outputStronglyAgreeNumberAreaChart, valueStronglyAgreeNumberDetails, clientTypeInternal, clientTypeExternal, selectedPointOfEntry_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, stronglyAgree_Id);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayStronglyAgreeAreaChart = controller_Document_DisplayStronglyAgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayStronglyAgreeAreaChart;
/*Export*/