/*Import*/
import {requestGenerateRateToken} from "./Request_GenerateRateToken.js";
/*Import*/


/*Gateway*/
async function gatewayGenerateRateToken(inputCode){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGenerateRateToken(inputCode)
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
window.gatewayGenerateRateToken = gatewayGenerateRateToken;
/*Declare global*/


/*Export*/
export default gatewayGenerateRateToken;
/*Export*/