/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetNeitherNumber_Path, neither_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, valueNeitherNumberDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetNeitherNumber} from "./Submit_GetNeitherNumber.js";
import outputNeitherNumberAreaChart from "./Output_NeitherNumberAreaChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayNeitherNumberAreaChart(){

	const dataObj = {endpoint: response_GetNeitherNumber_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, neither_Id};
	const controllersObj = {assignValue: valueNeitherNumberDetails, outputFn: outputNeitherNumberAreaChart};
	const loaderObj = {};

	submitGetNeitherNumber(controller_Document_DisplayNeitherNumberAreaChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayNeitherNumberAreaChart = controller_Document_DisplayNeitherNumberAreaChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayNeitherNumberAreaChart;
/*Export*/
