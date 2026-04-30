/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_TotalRespondent_Path, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitTotalRespondent} from "./Submit_TotalRespondent.js";
import outputRespondentSpan from "./Output_RespondentSpan.js";
import outputRespondentSpanLoader from "./Output_RespondentSpanLoader.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRespondent(){

	const dataObj = {endpoint: response_TotalRespondent_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {outputFn: outputRespondentSpan};
	const loaderObj = {boxLoader: outputRespondentSpanLoader, boxLoader_Id: "respondentSpanLoader-Id"};

	submitTotalRespondent(controller_Document_DisplayRespondent, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRespondent = controller_Document_DisplayRespondent;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRespondent;
/*Export*/
