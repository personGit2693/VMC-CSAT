/*Import*/
import {commentSectionWrap} from "./Elements_Page_RatingMonitoring.js";
import CommentDiv from "./Component_CommentDiv.js";
/*Import*/


/*Render*/
function viewCommentDiv(){

	CommentDiv().then(component => {
		commentSectionWrap.insertAdjacentHTML('beforeend', component);
	});
}
/*Render*/


/*Export*/
export default viewCommentDiv;
/*Export*/