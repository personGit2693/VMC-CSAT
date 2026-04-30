/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_RespondentPerScore_Path, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, valueRespondentPerScoreDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitRespondentPerScore} from "./Submit_RespondentPerScore.js";
import outputRespondentPerScorePieChart from "./Output_RespondentPerScorePieChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRespondentPerScorePieChart(){

	const dataObj = {endpoint: response_RespondentPerScore_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {assignValue: valueRespondentPerScoreDetails, outputFn: outputRespondentPerScorePieChart};
	const loaderObj = {};

	submitRespondentPerScore(controller_Document_DisplayRespondentPerScorePieChart, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRespondentPerScorePieChart = controller_Document_DisplayRespondentPerScorePieChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRespondentPerScorePieChart;
/*Export*/
