/*Import*/
import {requestGetNeitherNumber} from "./Request_GetNeitherNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetNeitherNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, neither_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetNeitherNumber(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, neither_Id)
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
window.gatewayGetNeitherNumber = gatewayGetNeitherNumber;
/*Declare global*/


/*Export*/
export default gatewayGetNeitherNumber;
/*Export*/