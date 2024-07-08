/*Import*/
import {valueNoRatingNumberDetails, selectedPointOfEntry_Obj, noRating_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetNoRatingNumber} from "./SubmitRequest_GetNoRatingNumber.js";
import outputNoRatingAreaChart from "./Output_NoRatingNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayNoRatingAreaChart(){

	submitGetNoRatingNumber(outputNoRatingAreaChart, valueNoRatingNumberDetails, selectedPointOfEntry_Obj.office_id, noRating_Id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayNoRatingAreaChart = controller_Document_DisplayNoRatingAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayNoRatingAreaChart;
/*Export*/