/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_CitizenCharterThreeScores_Path, ccThree_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCitizenCharterThreeScores} from "./Submit_CitizenCharterThreeScores.js";
import outputCitizenCharterThreeScoresTable from "./Output_CitizenCharterThreeScoresTable.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayCcThreeScoresTable(){

	const dataObj = {endpoint: response_CitizenCharterThreeScores_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, ccThree_Id};
	const controllersObj = {outputFn: outputCitizenCharterThreeScoresTable};
	const loaderObj = {};

	submitCitizenCharterThreeScores(controller_Document_DisplayCcThreeScoresTable, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayCcThreeScoresTable = controller_Document_DisplayCcThreeScoresTable;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayCcThreeScoresTable;
/*Export*/
