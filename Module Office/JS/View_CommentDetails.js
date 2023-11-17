/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Module_Office.js";
import CommentDetails from "./Component_CommentDetails.js";
/*Import*/


/*Render*/
function renderCommentDetails(){

	commentSectionWrap.innerHTML = CommentDetails();
}
/*Render*/


/*Export*/
export default renderCommentDetails;
/*Export*/