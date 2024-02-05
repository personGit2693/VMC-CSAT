/*Import*/
import {valueAvailedOfficeService, selectedPointOfEntry_Obj, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitGetOfficeServiceAvailed} from "./SubmitRequest_GetOfficeServiceAvailed.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputAvailedOfficeServiceBarChart from "./Output_AvailedOfficeServiceBarChart.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayAvailedOfficeServiceBarChart(){

	submitGetOfficeServiceAvailed(outputAvailedOfficeServiceBarChart, valueAvailedOfficeService, selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayAvailedOfficeServiceBarChart = controller_Document_DisplayAvailedOfficeServiceBarChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayAvailedOfficeServiceBarChart;
/*Export*/