/*Import*/
import {comments_PageNo, valueCommentStartIndex, commentDisplay, commentStartIndex, stronglyAgree_Id, agree_Id, noRating_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal} from "./Values_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitComments, blockRequest} from "./SubmitRequest_Comments.js";
import outputCommentDiv from "./Output_CommentDiv.js";
import outputCommentDivLoader from "./Output_CommentDivLoader.js";
/*Import*/


/*Controller*/
function controller_DivCommentsWrap_DisplayComments(commentSectionWrap){

	if((commentSectionWrap.scrollTop + commentSectionWrap.offsetHeight) >= commentSectionWrap.scrollHeight){

		if(blockRequest === false){		

			valueCommentStartIndex("");

			submitComments(outputCommentDiv, outputCommentDivLoader, "commentDivLoader-Id", selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex, valueCommentStartIndex, comments_PageNo);
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