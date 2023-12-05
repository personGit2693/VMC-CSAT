/*Import*/
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallStronglyAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestOverallStronglyAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallStronglyAgree = gatewayOverallStronglyAgree;
/*Declare global*/


/*Export*/
export default gatewayOverallStronglyAgree;
/*Export*/