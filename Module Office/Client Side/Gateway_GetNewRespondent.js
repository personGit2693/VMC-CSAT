/*Import*/
import {requestGetNewRespondent} from "./Request_GetNewRespondent.js";
/*Import*/


/*Gateway*/
async function gatewayGetNewRespondent(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetNewRespondent()
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
window.gatewayGetNewRespondent = gatewayGetNewRespondent;
/*Declare global*/


/*Export*/
export default gatewayGetNewRespondent;
/*Export*/