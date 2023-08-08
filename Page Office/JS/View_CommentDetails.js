/*Import*/
import {commentSectionWrap} from "./JSCollection_Page_Dashboard.js";
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