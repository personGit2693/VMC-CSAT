/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_Comments_Path, resetCommentStartIndex, commentDisplay, commentStartIndex, stronglyAgree_Id, agree_Id, noRating_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {commentSectionWrap, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitComments} from "./Submit_Comments.js";
import outputCommentDiv from "./Output_CommentDiv.js";
import outputCommentDivLoader from "./Output_CommentDivLoader.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayComments(){

	resetCommentStartIndex();

	commentSectionWrap.innerHTML = "";

	const dataObj = {endpoint: response_Comments_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex};
	const controllersObj = {outputFn: outputCommentDiv};
	const loaderObj = {boxLoader: outputCommentDivLoader, boxLoader_Id: "commentDivLoader-Id"};

	submitComments(controller_Document_DisplayComments, dataObj, controllersObj, loaderObj);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayComments = controller_Document_DisplayComments;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayComments;
/*Export*/
