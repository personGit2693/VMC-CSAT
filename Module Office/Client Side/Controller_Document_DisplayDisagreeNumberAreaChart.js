/*Import*/
import {disagree_Id, selectedPointOfEntry_Obj, clientTypeExternal, clientTypeInternal, currentNewRespondent, valueDisagreeNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import controller_Document_CountTotalAnsweredQuestions from "./Controller_Document_CountTotalAnsweredQuestions.js";
import {submitGetDisagreeNumber} from "./SubmitRequest_GetDisagreeNumber.js";
import outputDisagreeNumberAreaChart from "./Output_DisagreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayDisagreeNumberAreaChart(){

	submitGetDisagreeNumber(outputDisagreeNumberAreaChart, valueDisagreeNumberDetails, clientTypeInternal, clientTypeExternal, selectedPointOfEntry_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, disagree_Id);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayDisagreeNumberAreaChart = controller_Document_DisplayDisagreeNumberAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayDisagreeNumberAreaChart;
/*Export*/