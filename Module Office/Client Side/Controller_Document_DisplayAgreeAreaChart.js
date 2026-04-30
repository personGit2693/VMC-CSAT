/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetAgreeNumber_Path, selectedPointOfEntry_Obj, agree_Id, clientTypeInternal, clientTypeExternal, valueAgreeNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetAgreeNumber} from "./Submit_GetAgreeNumber.js";
import outputAgreeNumberAreaChart from "./Output_AgreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayAgreeAreaChart(){

	const dataObj = {endpoint: response_GetAgreeNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, agree_Id};
	const controllersObj = {assignValue: valueAgreeNumberDetails, outputFn: outputAgreeNumberAreaChart};
	const loaderObj = {};

	submitGetAgreeNumber(controller_Document_DisplayAgreeAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayAgreeAreaChart = controller_Document_DisplayAgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayAgreeAreaChart;
/*Export*/
