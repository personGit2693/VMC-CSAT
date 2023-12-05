/*Import*/
import {requestOverallServRate} from "./Request_OverallServRate.js";
/*Import*/


/*Gateway*/
async function gatewayOverallServRate(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){
		
		requestOverallServRate(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallServRate = gatewayOverallServRate;
/*Declare global*/


/*Export*/
export default gatewayOverallServRate;
/*Export*/