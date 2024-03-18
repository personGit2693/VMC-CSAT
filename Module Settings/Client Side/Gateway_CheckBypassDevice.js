/*Import*/
import {requestCheckBypassDevice} from "./Request_CheckBypassDevice.js";
/*Import*/


/*Gateway*/
async function gatewayCheckBypassDevice(){	

	const gatewayPromise = new Promise(function(resolve){

		requestCheckBypassDevice()
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
window.gatewayCheckBypassDevice = gatewayCheckBypassDevice;
/*Declare global*/


/*Export*/
export default gatewayCheckBypassDevice;
/*Export*/