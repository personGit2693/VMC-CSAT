/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetStronglyDisagreeNumber_Path, selectedPointOfEntry_Obj, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, valueStronglyDisagreeNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetStronglyDisagreeNumber} from "./Submit_GetStronglyDisagreeNumber.js";
import outputStronglyDisagreeNumberAreaChart from "./Output_StronglyDisagreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayStronglyDisgreeAreaChart(){

	const dataObj = {endpoint: response_GetStronglyDisagreeNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {assignValue: valueStronglyDisagreeNumberDetails, outputFn: outputStronglyDisagreeNumberAreaChart};
	const loaderObj = {};

	submitGetStronglyDisagreeNumber(controller_Document_DisplayStronglyDisgreeAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayStronglyDisgreeAreaChart = controller_Document_DisplayStronglyDisgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayStronglyDisgreeAreaChart;
/*Export*/
