/*Import*/
import {submittedRate} from "./Values_Survey.js";
import {submitCommentQuestions} from "./SubmitRequest_CommentQuestions.js";
import outputCommentsFields from "./Output_CommentsFields.js";
import outputCommentsFieldsLoader from "./Output_CommentsFieldsLoader.js";
/*Import*/


/*Controller*/
function controller_Btn_ListCommentsQuestions(){

	submitCommentQuestions(outputCommentsFields, outputCommentsFieldsLoader, "commentsFieldsLoader-Id", submittedRate.respondentDetails.clientTypeId, submittedRate.respondentDetails.officeId);	
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_ListCommentsQuestions = controller_Btn_ListCommentsQuestions;
/*Declare Global*/


/*Export*/
export default controller_Btn_ListCommentsQuestions;
/*Export*/