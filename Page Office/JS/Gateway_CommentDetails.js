/*Import*/
import {requestCommentDetails} from "./Request_CommentDetails.js";
/*Import*/


/*Gateway*/
const gatewayCommentDetails = () =>{
	requestCommentDetails();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayCommentDetails = gatewayCommentDetails;
/*Declare global*/