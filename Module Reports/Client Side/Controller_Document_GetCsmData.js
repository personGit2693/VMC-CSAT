/*Import*/
import {assignCsmRespondentCc, resetCsmData, assignCsmRespondentDetails, internal_clientTypeId, selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import {submitCsmRespondentDetails} from "./SubmitRequest_CsmRespondentDetails.js";
import {submitRespondentCcRates} from "./SubmitRequest_CsmRespondentsCc.js";
import outputCsmDataTableLoader from "./Output_CsmDataTableLoader.js";
/*Import*/


/*Controller*/
function controller_Document_GetCsmData(){	

	resetCsmData();

	const submits_Obj = {submitRespondentCcRates};

	submitCsmRespondentDetails(outputCsmDataTableLoader, "csmDataTableLoader-Id", assignCsmRespondentDetails, assignCsmRespondentCc, submits_Obj, internal_clientTypeId, selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetCsmData = controller_Document_GetCsmData;
/*Declare Global*/


/*Export*/
export default controller_Document_GetCsmData;
/*Export*/