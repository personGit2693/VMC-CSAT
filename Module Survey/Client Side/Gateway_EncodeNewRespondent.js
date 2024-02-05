/*Import*/
import {requestEncodeNewRespondent} from "./Request_EncodeNewRespondent.js";
/*Import*/


/*Gateway*/
async function gatewayEncodeNewRespondent(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestEncodeNewRespondent()
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
window.gatewayEncodeNewRespondent = gatewayEncodeNewRespondent;
/*Declare global*/


/*Export*/
export default gatewayEncodeNewRespondent;
/*Export*/