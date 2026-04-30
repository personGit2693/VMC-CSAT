/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_CitizenCharterOneScores_Path, ccOne_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterOneScores} from "./Submit_CitizenCharterOneScores.js";
import outputCitizenCharterOneScoresTable from "./Output_CitizenCharterOneScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcOneScoresTable(){

	const dataObj = {endpoint: response_CitizenCharterOneScores_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, ccOne_Id};
	const controllersObj = {outputFn: outputCitizenCharterOneScoresTable};
	const loaderObj = {};

	submitCitizenCharterOneScores(controller_Document_DisplayCcOneScoresTable, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcOneScoresTable = controller_Document_DisplayCcOneScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcOneScoresTable;
/*Export*/
