/*Import*/
import {neither_Id, selectedPointOfEntry_Obj, clientTypeExternal, clientTypeInternal, currentNewRespondent, valueNeitherNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import controller_Document_CountTotalAnsweredQuestions from "./Controller_Document_CountTotalAnsweredQuestions.js";
import {submitGetNeitherNumber} from "./SubmitRequest_GetNeitherNumber.js";
import outputNeitherNumberAreaChart from "./Output_NeitherNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayNeitherNumberAreaChart(){

	submitGetNeitherNumber(outputNeitherNumberAreaChart, valueNeitherNumberDetails, clientTypeInternal, clientTypeExternal, selectedPointOfEntry_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, neither_Id);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayNeitherNumberAreaChart = controller_Document_DisplayNeitherNumberAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayNeitherNumberAreaChart;
/*Export*/