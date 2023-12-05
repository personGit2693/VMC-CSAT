/*Import*/
import {requestOverallAgree} from "./Request_OverallAgree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOverallAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallAgree = gatewayOverallAgree;
/*Declare global*/


export default gatewayOverallAgree;