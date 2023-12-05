/*Import*/
import {requestOverallNeither} from "./Request_OverallNeither.js";
/*Import*/


/*Gateway*/
async function gatewayOverallNeither(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestOverallNeither(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallNeither = gatewayOverallNeither;
/*Declare global*/


/*Export*/
export default gatewayOverallNeither;
/*Export*/