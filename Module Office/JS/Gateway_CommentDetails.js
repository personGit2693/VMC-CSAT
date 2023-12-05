/*Import*/
import {requestCommentDetails} from "./Request_CommentDetails.js";
/*Import*/


/*Gateway*/
async function gatewayCommentDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, commentStartIndex, commentDisplay){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestCommentDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, commentStartIndex, commentDisplay)
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
window.gatewayCommentDetails = gatewayCommentDetails;
/*Declare global*/


/*Export*/
export default gatewayCommentDetails;
/*Export*/