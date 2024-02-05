/*Import*/
import {requestCheckCredential} from "./Request_CheckCredential.js";
/*Import*/


/*Gateway*/
async function gatewayCheckCredential(usernInput, passInput, account_identifier){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCheckCredential(usernInput, passInput, account_identifier)
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
window.gatewayCheckCredential = gatewayCheckCredential;
/*Declare global*/


/*Export*/
export default gatewayCheckCredential;
/*Export*/