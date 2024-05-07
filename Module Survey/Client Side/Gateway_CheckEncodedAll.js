/*Import*/
import {requestCheckEncodedAll} from "./Request_CheckEncodedAll.js";
/*Import*/


/*Gateway*/
async function gatewayCheckEncodedAll(submittedRate){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCheckEncodedAll(submittedRate)
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
window.gatewayCheckEncodedAll = gatewayCheckEncodedAll;
/*Declare global*/


/*Export*/
export default gatewayCheckEncodedAll;
/*Export*/