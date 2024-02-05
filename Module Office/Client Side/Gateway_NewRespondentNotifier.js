/*Import*/
import {requestNewRespondentNotifier} from "./Request_NewRespondentNotifier.js";
/*Import*/


/*Gateway*/
async function gatewayNewRespondentNotifier(currentNewRespondent){
	
	const gatewayPromise = new Promise(function(resolve){

		requestNewRespondentNotifier(currentNewRespondent)
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
window.gatewayNewRespondentNotifier = gatewayNewRespondentNotifier;
/*Declare global*/


/*Export*/
export default gatewayNewRespondentNotifier;
/*Export*/