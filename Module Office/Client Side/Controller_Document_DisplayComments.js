/*Import*/
import {resetCommentStartIndex, commentDisplay, commentStartIndex, stronglyAgree_Id, agree_Id, noRating_Id, selectedPointOfEntry_Obj, clientTypeInternal, clientTypeExternal, currentNewRespondent} from "./Values_Office.js";
import {commentSectionWrap, dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_RatingMonitoring.js";
import {submitComments} from "./SubmitRequest_Comments.js";
import {submitNewRespondentNotifier} from "./SubmitRequest_NewRespondentNotifier.js";
import outputCommentDiv from "./Output_CommentDiv.js";
import outputCommentDivLoader from "./Output_CommentDivLoader.js";
/*Import*/


/*Controller*/
function controller_Document_DisplayComments(){

	resetCommentStartIndex();

	commentSectionWrap.innerHTML = "";

	submitComments(outputCommentDiv, outputCommentDivLoader, "commentDivLoader-Id", selectedPointOfEntry_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex, submitNewRespondentNotifier, currentNewRespondent);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_DisplayComments = controller_Document_DisplayComments;
/*Declare Global*/


/*Export*/
export default controller_Document_DisplayComments;
/*Export*/