/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_CitizenCharterTwoScores_Path, ccTwo_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterTwoScores} from "./Submit_CitizenCharterTwoScores.js";
import outputCitizenCharterTwoScoresTable from "./Output_CitizenCharterTwoScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcTwoScoresTable(){

	const dataObj = {endpoint: response_CitizenCharterTwoScores_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, ccTwo_Id};
	const controllersObj = {outputFn: outputCitizenCharterTwoScoresTable};
	const loaderObj = {};

	submitCitizenCharterTwoScores(controller_Document_DisplayCcTwoScoresTable, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcTwoScoresTable = controller_Document_DisplayCcTwoScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcTwoScoresTable;
/*Export*/
