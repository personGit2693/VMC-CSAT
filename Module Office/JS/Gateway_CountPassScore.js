/*Import*/
import {requestCountPassScore} from "./Request_CountPassScore.js";
/*Import*/


/*Gateway*/
async function gatewayCountPassScore(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){
		
		requestCountPassScore(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayCountPassScore = gatewayCountPassScore;
/*Declare global*/


/*Export*/
export default gatewayCountPassScore;
/*Export*/