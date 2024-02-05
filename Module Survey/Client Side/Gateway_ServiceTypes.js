/*Import*/
import {requestServiceTypes} from "./Request_ServiceTypes.js";
/*Import*/


/*Gateway*/
async function gatewayServiceTypes(respondentId, clientTypeId, officeId){
	
	const gatewayPromise = new Promise(function(resolve){

		requestServiceTypes(respondentId, clientTypeId, officeId)
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
window.gatewayServiceTypes = gatewayServiceTypes;
/*Declare global*/


/*Export*/
export default gatewayServiceTypes;
/*Export*/