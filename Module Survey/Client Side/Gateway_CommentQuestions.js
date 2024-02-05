/*Import*/
import {requestCommentQuestions} from "./Request_CommentQuestions.js";
/*Import*/


/*Gateway*/
async function gatewayCommentQuestions(clientTypeId, officeId){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCommentQuestions(clientTypeId, officeId)
		.then(requestPromise => {

			if(requestPromise === true){
				
				resolve(true);
			}
		});
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayCommentQuestions = gatewayCommentQuestions;
/*Declare global*/


/*Export*/
export default gatewayCommentQuestions;
/*Export*/