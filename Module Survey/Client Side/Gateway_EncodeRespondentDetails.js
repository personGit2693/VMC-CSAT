/*Import*/
import {requestEncodeRespondentDetails} from "./Request_EncodeRespondentDetails.js";
/*Import*/


/*Gateway*/
async function gatewayEncodeRespondentDetails(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){

		requestEncodeRespondentDetails(submittedRate)
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
window.gatewayEncodeRespondentDetails = gatewayEncodeRespondentDetails;
/*Declare global*/


/*Export*/
export default gatewayEncodeRespondentDetails;
/*Export*/