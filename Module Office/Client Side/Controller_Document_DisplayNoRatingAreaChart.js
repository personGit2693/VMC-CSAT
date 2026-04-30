/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetNoRatingNumber_Path, selectedPointOfEntry_Obj, noRating_Id, clientTypeInternal, clientTypeExternal, valueNoRatingNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetNoRatingNumber} from "./Submit_GetNoRatingNumber.js";
import outputNoRatingAreaChart from "./Output_NoRatingNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayNoRatingAreaChart(){

	const dataObj = {endpoint: response_GetNoRatingNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {assignValue: valueNoRatingNumberDetails, outputFn: outputNoRatingAreaChart};
	const loaderObj = {};

	submitGetNoRatingNumber(controller_Document_DisplayNoRatingAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayNoRatingAreaChart = controller_Document_DisplayNoRatingAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayNoRatingAreaChart;
/*Export*/
