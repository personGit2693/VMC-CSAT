/*Import*/
import {requestOverallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Gateway*/
async function gatewayOverallEngagement(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOverallEngagement(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallEngagement = gatewayOverallEngagement;
/*Declare global*/


/*Export*/
export default gatewayOverallEngagement;
/*Export*/