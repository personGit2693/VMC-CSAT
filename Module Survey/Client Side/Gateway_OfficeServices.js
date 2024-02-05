/*Import*/
import {requestOfficeServices} from "./Request_OfficeServices.js";
/*Import*/


/*Gateway*/
async function gatewayOfficeServices(serviceTypeId, clientTypeId, officeId){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOfficeServices(serviceTypeId, clientTypeId, officeId)
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
window.gatewayOfficeServices = gatewayOfficeServices;
/*Declare global*/


/*Export*/
export default gatewayOfficeServices;
/*Export*/