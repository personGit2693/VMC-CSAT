/*Import*/
import {commentSectionWrap} from "../../Global JS/JSCollection_Module_Office.js";
import AppendCommentDetails from "./Component_AppendCommentDetails.js";
/*Import*/


/*Render*/
function viewAppendCommentDetails(){
	commentSectionWrap.innerHTML += AppendCommentDetails();
}
/*Render*/


/*Export*/
export default viewAppendCommentDetails;
/*Export*/