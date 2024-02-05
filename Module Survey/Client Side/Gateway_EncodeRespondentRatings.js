/*Import*/
import {requestEncodeRespondentRatings} from "./Request_EncodeRespondentRatings.js";
/*Import*/


/*Gateway*/
async function gatewayEncodeRespondentRatings(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestEncodeRespondentRatings(submittedRate)
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
window.gatewayEncodeRespondentRatings = gatewayEncodeRespondentRatings;
/*Declare global*/


/*Export*/
export default gatewayEncodeRespondentRatings;
/*Export*/