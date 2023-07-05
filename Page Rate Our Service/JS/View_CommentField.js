/*Import*/
import {commentsWrap} from "./JsCollection_Page_RateService.js";
import CommentField from "./Component_CommentField.js";
/*Import*/


/*Render*/
function renderCommentField(){
	commentsWrap.innerHTML = CommentField();
}
/*Render*/


/*Export*/
export default renderCommentField;
/*Export*/