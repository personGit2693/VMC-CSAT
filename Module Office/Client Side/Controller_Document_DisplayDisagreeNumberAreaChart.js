/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetDisagreeNumber_Path, disagree_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, valueDisagreeNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetDisagreeNumber} from "./Submit_GetDisagreeNumber.js";
import outputDisagreeNumberAreaChart from "./Output_DisagreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayDisagreeNumberAreaChart(){

	const dataObj = {endpoint: response_GetDisagreeNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, disagree_Id};
	const controllersObj = {assignValue: valueDisagreeNumberDetails, outputFn: outputDisagreeNumberAreaChart};
	const loaderObj = {};

	submitGetDisagreeNumber(controller_Document_DisplayDisagreeNumberAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayDisagreeNumberAreaChart = controller_Document_DisplayDisagreeNumberAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayDisagreeNumberAreaChart;
/*Export*/
