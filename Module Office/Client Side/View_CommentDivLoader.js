/*Import*/
import {commentSectionWrap} from "./Elements_Page_RatingMonitoring.js";
import CommentDivLoader from "./Component_CommentDivLoader.js";
/*Import*/


/*Render*/
function viewCommentDivLoader(){

	CommentDivLoader().then(component => {
		commentSectionWrap.insertAdjacentHTML('beforeend', component);
	});
}
/*Render*/


/*Export*/
export default viewCommentDivLoader;
/*Export*/