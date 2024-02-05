/*Import*/
import {requestComments} from "./Request_Comments.js";
/*Import*/


/*Gateway*/
async function gatewayComments(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex){
	
	const gatewayPromise = new Promise(function(resolve){

		requestComments(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, commentDisplay, commentStartIndex)
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
window.gatewayComments = gatewayComments;
/*Declare global*/


/*Export*/
export default gatewayComments;
/*Export*/