/*Import*/
import {requestValidateCode} from "./Request_ValidateCode.js";
/*Import*/


/*Gateway*/
async function gatewayValidateCode(inputCode){
	
	const gatewayPromise = new Promise(function(resolve){

		requestValidateCode(inputCode)
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
window.gatewayValidateCode = gatewayValidateCode;
/*Declare global*/


/*Export*/
export default gatewayValidateCode;
/*Export*/