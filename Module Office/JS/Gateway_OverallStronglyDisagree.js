/*Import*/
import {requestOverallStronglyDisagree} from "./Request_OverallStronglyDisagree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallStronglyDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOverallStronglyDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallStronglyDisagree = gatewayOverallStronglyDisagree;
/*Declare global*/


/*Export*/
export default gatewayOverallStronglyDisagree;
/*Export*/