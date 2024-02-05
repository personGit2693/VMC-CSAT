/*Import*/
import {requestGetStronglyDisagreeNumber} from "./Request_GetStronglyDisagreeNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetStronglyDisagreeNumber(officeId, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetStronglyDisagreeNumber(officeId, stronglyDisagree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayGetStronglyDisagreeNumber = gatewayGetStronglyDisagreeNumber;
/*Declare global*/


/*Export*/
export default gatewayGetStronglyDisagreeNumber;
/*Export*/