/*Import*/
import {requestGetStronglyAgreeNumber} from "./Request_GetStronglyAgreeNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetStronglyAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, stronglyAgree_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetStronglyAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, stronglyAgree_Id)
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
window.gatewayGetStronglyAgreeNumber = gatewayGetStronglyAgreeNumber;
/*Declare global*/


/*Export*/
export default gatewayGetStronglyAgreeNumber;
/*Export*/