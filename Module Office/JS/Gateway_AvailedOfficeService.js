/*Import*/
import {requestAvailedOfficeService} from "./Request_AvailedOfficeService.js";
/*Import*/


/*Gateway*/
async function gatewayAvailedOfficeService(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestAvailedOfficeService(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayAvailedOfficeService = gatewayAvailedOfficeService;
/*Declare global*/


/*Export*/
export default gatewayAvailedOfficeService;
/*Export*/