/*Import*/
import {commentsWrap} from "./Elements_Page_RateServey.js";
import CommentsFields from "./Component_CommentsFields.js";
/*Import*/


/*Render*/
function viewCommentsFields(){

	commentsWrap.innerHTML = CommentsFields();
}
/*Render*/


/*Export*/
export default viewCommentsFields;
/*Export*/