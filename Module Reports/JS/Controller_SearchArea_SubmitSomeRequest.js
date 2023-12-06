/*Import*/
import {valueDataTwo, selectedOffice_Obj} from "../../Global JS/Values_Module_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Reports.js";
import {submitRequestDataOne} from "./SubmitRequest_DataOne.js";
import {submitRequestCcDataTwo} from "./SubmitRequest_CcDataTwo.js";
import {submitRequestQuestionsDataTwo} from "./SubmitRequest_QuestionsDataTwo.js";
import outputDataOneTable from "./Output_DataOneTable.js";
import outputDataOneTableLoader from "./Output_DataOneTableLoader.js";
import outputDataTwoTable from "./Output_DataTwoTable.js";
import outputDataTwoTableLoader from "./Output_DataTwoTableLoader.js";
/*Import*/


/*Controller Function*/
function controller_SearchArea_SubmitSomeRequest(){
	
	submitRequestDataOne(outputDataOneTable, outputDataOneTableLoader, "dataOneTableLoader-Id", selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);

	submitRequestCcDataTwo(outputDataTwoTable, outputDataTwoTableLoader, "dataTwoTableLoader-Id", valueDataTwo, submitRequestQuestionsDataTwo, selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller Function*/


/*Declare Global*/
window.controller_SearchArea_SubmitSomeRequest = controller_SearchArea_SubmitSomeRequest;
/*Declare Global*/


/*Export*/
export default controller_SearchArea_SubmitSomeRequest;
/*Export*/