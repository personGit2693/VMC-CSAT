/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetStronglyAgreeNumber_Path, selectedPointOfEntry_Obj, stronglyAgree_Id, clientTypeInternal, clientTypeExternal, valueStronglyAgreeNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetStronglyAgreeNumber} from "./Submit_GetStronglyAgreeNumber.js";
import outputStronglyAgreeNumberAreaChart from "./Output_StronglyAgreeNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayStronglyAgreeAreaChart(){

	const dataObj = {endpoint: response_GetStronglyAgreeNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, stronglyAgree_Id};
	const controllersObj = {assignValue: valueStronglyAgreeNumberDetails, outputFn: outputStronglyAgreeNumberAreaChart};
	const loaderObj = {};

	submitGetStronglyAgreeNumber(controller_Document_DisplayStronglyAgreeAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayStronglyAgreeAreaChart = controller_Document_DisplayStronglyAgreeAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayStronglyAgreeAreaChart;
/*Export*/
