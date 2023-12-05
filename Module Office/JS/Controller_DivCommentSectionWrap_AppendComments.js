/*Import*/
import {valueCommentStartIndex} from "../../Global JS/Values_Module_Office.js";
import outputAppendCommentDetails from "./Output_AppendCommentDetails.js";
import outputCommentSectionLoader from "./Output_CommentSectionLoader.js";
import {submitRequestCommentDetails} from "./SubmitRequest_CommentDetails.js";
/*Import*/


/*Controller for invoking valueCommentStartIndex and submitRequestCommentDetails*/
function controller_DivCommentSectionWrap_AppendComments(divCommentSectionWrap){

	if((divCommentSectionWrap.scrollTop + divCommentSectionWrap.offsetHeight) >= divCommentSectionWrap.scrollHeight){		
			
		valueCommentStartIndex();			
		submitRequestCommentDetails(outputAppendCommentDetails, outputCommentSectionLoader, "commentSectionLoader-Id");
	}
	
}
/*Controller for invoking valueCommentStartIndex and submitRequestCommentDetails*/


/*Declare Global*/
window.controller_DivCommentSectionWrap_AppendComments = controller_DivCommentSectionWrap_AppendComments
/*Declare Global*/


/*Export*/
export default controller_DivCommentSectionWrap_AppendComments;
/*Export*/