/*Import*/
import token from "./../../Global Client Side/Token.js";
import {response_Comments_Path, comments_PageNo, valueCommentStartIndex, commentDisplay, commentStartIndex, stronglyAgree_Id, agree_Id, noRating_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitComments, blockRequest} from "./Submit_Comments.js";
import outputCommentDiv from "./Output_CommentDiv.js";
import outputCommentDivLoader from "./Output_CommentDivLoader.js";
/*Import*/


/*Controller*/
function controller_DivCommentsWrap_DisplayComments(commentSectionWrap){

	if((commentSectionWrap.scrollTop + commentSectionWrap.offsetHeight) >= commentSectionWrap.scrollHeight){

		if(blockRequest === false){

			valueCommentStartIndex("");

			const dataObj = {endpoint: response_Comments_Path, token, officeId: selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateFrom: dateRangeOneCalLiteFromVal.value, dateTo: dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex, comments_PageNo};
			const controllersObj = {outputFn: outputCommentDiv, valueCommentStartIndex};
			const loaderObj = {boxLoader: outputCommentDivLoader, boxLoader_Id: "commentDivLoader-Id"};

			submitComments(controller_DivCommentsWrap_DisplayComments, dataObj, controllersObj, loaderObj);
		}
	}
}
/*Controller*/


/*Declare Global*/
window.controller_DivCommentsWrap_DisplayComments = controller_DivCommentsWrap_DisplayComments;
/*Declare Global*/


/*Export*/
export default controller_DivCommentsWrap_DisplayComments;
/*Export*/
