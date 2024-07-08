/*Import*/
import {selectedPointOfEntry_Obj, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCountPassScore} from "./SubmitRequest_CountPassScore.js";
import outputRatingSpan from "./Output_RatingSpan.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRating(){

	submitCountPassScore(outputRatingSpan, selectedPointOfEntry_Obj.office_id, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRating = controller_Document_DisplayRating;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRating;
/*Export*/