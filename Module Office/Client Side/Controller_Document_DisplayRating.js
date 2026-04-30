/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_CountPassScore_Path, selectedPointOfEntry_Obj, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitCountPassScore} from "./Submit_CountPassScore.js";
import outputRatingSpan from "./Output_RatingSpan.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayRating(){

	const dataObj = {endpoint: response_CountPassScore_Path, token, officeId: selectedPointOfEntry_Obj.office_id, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value};
	const controllersObj = {outputFn: outputRatingSpan};
	const loaderObj = {};

	submitCountPassScore(controller_Document_DisplayRating, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayRating = controller_Document_DisplayRating;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayRating;
/*Export*/
