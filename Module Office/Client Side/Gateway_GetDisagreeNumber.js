/*Import*/
import {requestGetDisagreeNumber} from "./Request_GetDisagreeNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetDisagreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, disagree_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetDisagreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, disagree_Id)
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
window.gatewayGetDisagreeNumber = gatewayGetDisagreeNumber;
/*Declare global*/


/*Export*/
export default gatewayGetDisagreeNumber;
/*Export*/