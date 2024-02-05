/*Import*/
import {requestAwarenessRates} from "./Request_AwarenessRates.js";
/*Import*/


/*Gateway*/
async function gatewayAwarenessRates(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestAwarenessRates()
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
window.gatewayAwarenessRates = gatewayAwarenessRates;
/*Declare global*/


/*Export*/
export default gatewayAwarenessRates;
/*Export*/