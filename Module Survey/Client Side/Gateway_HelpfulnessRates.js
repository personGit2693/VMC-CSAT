/*Import*/
import {requestHelpfulnessRates} from "./Request_HelpfulnessRates.js";
/*Import*/


/*Gateway*/
async function gatewayHelpfulnessRates(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestHelpfulnessRates()
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
window.gatewayHelpfulnessRates = gatewayHelpfulnessRates;
/*Declare global*/


/*Export*/
export default gatewayHelpfulnessRates;
/*Export*/