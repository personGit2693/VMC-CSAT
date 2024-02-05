/*Import*/
import {requestGetOfficeServiceAvailed} from "./Request_GetOfficeServiceAvailed.js";
/*Import*/


/*Gateway*/
async function gatewayGetOfficeServiceAvailed(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetOfficeServiceAvailed(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayGetOfficeServiceAvailed = gatewayGetOfficeServiceAvailed;
/*Declare global*/


/*Export*/
export default gatewayGetOfficeServiceAvailed;
/*Export*/