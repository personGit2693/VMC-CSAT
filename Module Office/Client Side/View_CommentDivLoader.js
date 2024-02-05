/*Import*/
import {commentSectionWrap} from "./Elements_Page_RatingMonitoring.js";
import CommentDivLoader from "./Component_CommentDivLoader.js";
/*Import*/


/*Render*/
function viewCommentDivLoader(){
	
	commentSectionWrap.innerHTML += CommentDivLoader();		
}
/*Render*/


/*Export*/
export default viewCommentDivLoader;
/*Export*/