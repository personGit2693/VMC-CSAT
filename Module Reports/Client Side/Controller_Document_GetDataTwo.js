/*Import*/
import {resetRespondentsQuestionsRatingsArray, valueRespondentsQuestionsRatingsArray, questionActive, valueRespondentsCcRatingsArray, resetRespondentsCcRatingsArray, external_clientTypeId, selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import {submitRespondentCcRates} from "./SubmitRequest_RespondentCcRates.js";
import {submitRespondentQuestionRates} from "./SubmitRequest_RespondentQuestionRates.js";
/*Import*/


/*Controller*/
function controller_Document_GetDataTwo(){	

	resetRespondentsCcRatingsArray();
	resetRespondentsQuestionsRatingsArray();

	submitRespondentCcRates(, , "dataOneTableLoader-Id", valueRespondentsCcRatingsArray, submitRespondentQuestionRates, valueRespondentsQuestionsRatingsArray, questionActive, external_clientTypeId, selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetDataTwo = controller_Document_GetDataTwo;
/*Declare Global*/


/*Export*/
export default controller_Document_GetDataTwo;
/*Export*/