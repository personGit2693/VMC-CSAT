/*Import*/
import {requestEncodeCcRatings} from "./Request_EncodeCcRatings.js";
/*Import*/


/*Gateway*/
async function gatewayEncodeCcRatings(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){

		requestEncodeCcRatings(submittedRate)
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
window.gatewayEncodeCcRatings = gatewayEncodeCcRatings;
/*Declare global*/


/*Export*/
export default gatewayEncodeCcRatings;
/*Export*/