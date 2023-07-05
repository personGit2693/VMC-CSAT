/*Import*/
import {requestCommentQuestions} from "./Request_CommentQuestions.js";
/*Import*/


/*Gateway*/
const gatewayCommentQuestions = () =>{
	requestCommentQuestions();
}
/*Gateway*/


/*Declare global*/
window.gatewayCommentQuestions = gatewayCommentQuestions;
/*Declare global*/