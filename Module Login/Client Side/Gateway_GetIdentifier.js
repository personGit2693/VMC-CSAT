/*Import*/
import {requestGetIdentifier} from "./Request_GetIdentifier.js";
/*Import*/


/*Gateway*/
async function gatewayGetIdentifier(usernInput){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetIdentifier(usernInput)
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
window.gatewayGetIdentifier = gatewayGetIdentifier;
/*Declare global*/


/*Export*/
export default gatewayGetIdentifier;
/*Export*/