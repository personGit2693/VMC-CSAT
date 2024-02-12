/*Import*/
import {resetDataTwoArray, resetRespondentRatingsDetailsArray, valueRespondentRatingsDetailsArray, valueReferenceNoArray, resetReferenceNoArray, resetRespondentsQuestionsRatingsArray, valueRespondentsQuestionsRatingsArray, questionActive, valueRespondentsCcRatingsArray, resetRespondentsCcRatingsArray, external_clientTypeId, selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import {submitDataOneFromDataTwo} from "./SubmitRequest_DataOneFromDataTwo.js";
import {submitRespondentCcRates} from "./SubmitRequest_RespondentCcRates.js";
import {submitRespondentQuestionRates} from "./SubmitRequest_RespondentQuestionRates.js";
import outputDataTwoTable from "./Output_DataTwoTable.js";
import outputDataTwoTableLoader from "./Output_DataTwoTableLoader.js";
/*Import*/


/*Controller*/
function controller_Document_GetDataTwo(){	

	resetDataTwoArray();
	resetRespondentRatingsDetailsArray();
	resetReferenceNoArray();
	resetRespondentsCcRatingsArray();
	resetRespondentsQuestionsRatingsArray();	

	submitDataOneFromDataTwo(outputDataTwoTable, outputDataTwoTableLoader, "dataTwoTableLoader-Id", valueReferenceNoArray, submitRespondentCcRates, valueRespondentsCcRatingsArray, submitRespondentQuestionRates, valueRespondentsQuestionsRatingsArray, valueRespondentRatingsDetailsArray, questionActive, external_clientTypeId, selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetDataTwo = controller_Document_GetDataTwo;
/*Declare Global*/


/*Export*/
export default controller_Document_GetDataTwo;
/*Export*/