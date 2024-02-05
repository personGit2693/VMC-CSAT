/*Import*/
import {requestGetAgreeNumber} from "./Request_GetAgreeNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, agree_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetAgreeNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, agree_Id)
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
window.gatewayGetAgreeNumber = gatewayGetAgreeNumber;
/*Declare global*/


/*Export*/
export default gatewayGetAgreeNumber;
/*Export*/