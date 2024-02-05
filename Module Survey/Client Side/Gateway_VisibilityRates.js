/*Import*/
import {requestVisibilityRates} from "./Request_VisibilityRates.js";
/*Import*/


/*Gateway*/
async function gatewayVisibilityRates(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestVisibilityRates()
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
window.gatewayVisibilityRates = gatewayVisibilityRates;
/*Declare global*/


/*Export*/
export default gatewayVisibilityRates;
/*Export*/