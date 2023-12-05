/*Import*/
import {requestOverallDisagree} from "./Request_OverallDisagree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){
	
		requestOverallDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallDisagree = gatewayOverallDisagree;
/*Declare global*/


/*Export*/
export default gatewayOverallDisagree;
/*Export*/