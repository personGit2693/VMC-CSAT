/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Module_Office.js";
import CommentSectionLoader from "./Component_CommentSectionLoader.js";
/*Import*/


/*Render*/
function viewCommentSectionLoader(){

	commentSectionWrap.innerHTML += CommentSectionLoader();
}
/*Render*/


/*Export*/
export default viewCommentSectionLoader;
/*Export*/