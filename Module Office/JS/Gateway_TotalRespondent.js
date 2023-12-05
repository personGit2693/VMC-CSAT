/*Import*/
import {requestTotalRespondent} from "./Request_TotalRespondent.js";
/*Import*/


/*Gateway*/
async function gatewayTotalRespondent(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestTotalRespondent(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayTotalRespondent = gatewayTotalRespondent;
/*Declare global*/


/*Export*/
export default gatewayTotalRespondent;
/*Export*/