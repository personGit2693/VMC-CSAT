/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Module_Office.js";
import CommentSectionLoader from "./Component_CommentSectionLoader.js";
/*Import*/


/*Render*/
function renderCommentSectionLoader(){

	commentSectionWrap.innerHTML += CommentSectionLoader();
}
/*Render*/


/*Export*/
export default renderCommentSectionLoader;
/*Export*/