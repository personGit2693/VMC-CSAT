/*Import*/
import {currentNewRespondent, selectedPointOfEntry_Obj, clientTypeExternal, clientTypeInternal, valueRespondentPerScoreDetails} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import outputRespondentPerScorePieChart from "./Output_RespondentPerScorePieChart.js";
import {submitRespondentPerScore} from "./SubmitRequest_RespondentPerScore.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRespondentPerScorePieChart(){

	submitRespondentPerScore(outputRespondentPerScorePieChart, valueRespondentPerScoreDetails, clientTypeInternal, clientTypeExternal, selectedPointOfEntry_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRespondentPerScorePieChart = controller_Document_DisplayRespondentPerScorePieChart;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRespondentPerScorePieChart;
/*Export*/