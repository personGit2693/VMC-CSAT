/*Import*/
import {requestGenerateAccToken} from "./Request_GenerateAccToken.js";
/*Import*/


/*Gateway*/
async function gatewayGenerateAccToken(usernInput){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGenerateAccToken(usernInput)
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
window.gatewayGenerateAccToken = gatewayGenerateAccToken;
/*Declare global*/


/*Export*/
export default gatewayGenerateAccToken;
/*Export*/