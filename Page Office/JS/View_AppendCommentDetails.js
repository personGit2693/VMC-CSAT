/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Page_Dashboard.js";
import AppendCommentDetails from "./Component_AppendCommentDetails.js";
/*Import*/


/*Render*/
function renderAppendCommentDetails(){
	commentSectionWrap.innerHTML += AppendCommentDetails();
}
/*Render*/


/*Export*/
export default renderAppendCommentDetails;
/*Export*/