/*Import*/
import {requestFreqVisits} from "./Request_FreqVisits.js";
/*Import*/


/*Gateway*/
async function gatewayFreqVisits(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestFreqVisits()
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
window.gatewayFreqVisits = gatewayFreqVisits;
/*Declare global*/


/*Export*/
export default gatewayFreqVisits;
/*Export*/