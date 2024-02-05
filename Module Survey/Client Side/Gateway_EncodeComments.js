/*Import*/
import {requestEncodeComments} from "./Request_EncodeComments.js";
/*Import*/


/*Gateway*/
async function gatawayEncodeComments(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestEncodeComments(submittedRate)
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
window.gatawayEncodeComments = gatawayEncodeComments;
/*Declare global*/


/*Export*/
export default gatawayEncodeComments;
/*Export*/