/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Module_Office.js";
import CommentDetails from "./Component_CommentDetails.js";
/*Import*/


/*Render*/
function viewCommentDetails(){

	commentSectionWrap.innerHTML = CommentDetails();
}
/*Render*/


/*Export*/
export default viewCommentDetails;
/*Export*/