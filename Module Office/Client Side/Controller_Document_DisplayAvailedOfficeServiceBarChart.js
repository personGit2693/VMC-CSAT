/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_GetOfficeServiceAvailed_Path, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, valueAvailedOfficeService} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetOfficeServiceAvailed} from "./Submit_GetOfficeServiceAvailed.js";
import outputAvailedOfficeServiceBarChart from "./Output_AvailedOfficeServiceBarChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayAvailedOfficeServiceBarChart(){

	const dataObj = {endpoint: response_GetOfficeServiceAvailed_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {assignValue: valueAvailedOfficeService, outputFn: outputAvailedOfficeServiceBarChart};
	const loaderObj = {};

	submitGetOfficeServiceAvailed(controller_Document_DisplayAvailedOfficeServiceBarChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayAvailedOfficeServiceBarChart = controller_Document_DisplayAvailedOfficeServiceBarChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayAvailedOfficeServiceBarChart;
/*Export*/
