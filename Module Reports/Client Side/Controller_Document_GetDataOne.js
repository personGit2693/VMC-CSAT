/*Import*/
import {valueReferenceNoArray, resetReferenceNoArray, external_clientTypeId, selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import {submitDataOne} from "./SubmitRequest_DataOne.js";
import outputDataOneTable from "./Output_DataOneTable.js";
import outputDataOneTableLoader from "./Output_DataOneTableLoader.js";
/*Import*/


/*Controller*/
function controller_Document_GetDataOne(){	

	resetReferenceNoArray();

	submitDataOne(outputDataOneTable, outputDataOneTableLoader, "dataOneTableLoader-Id", valueReferenceNoArray, external_clientTypeId, selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GetDataOne = controller_Document_GetDataOne;
/*Declare Global*/


/*Export*/
export default controller_Document_GetDataOne;
/*Export*/