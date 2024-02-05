/*Import*/
import {commentSectionWrap} from "./Elements_Page_RatingMonitoring.js";
import CommentDiv from "./Component_CommentDiv.js";
/*Import*/


/*Render*/
function viewCommentDiv(){
	
	commentSectionWrap.innerHTML += CommentDiv();		
}
/*Render*/


/*Export*/
export default viewCommentDiv;
/*Export*/