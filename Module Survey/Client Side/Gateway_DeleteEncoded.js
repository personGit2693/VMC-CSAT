/*Import*/
import {requestDeleteEncoded} from "./Request_DeleteEncoded.js";
/*Import*/


/*Gateway*/
async function gatewayDeleteEncoded(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestDeleteEncoded(submittedRate)
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
window.gatewayDeleteEncoded = gatewayDeleteEncoded;
/*Declare global*/


/*Export*/
export default gatewayDeleteEncoded;
/*Export*/