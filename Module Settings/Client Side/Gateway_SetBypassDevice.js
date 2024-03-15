/*Import*/
import {requestSetBypassDevice} from "./Request_SetBypassDevice.js";
/*Import*/


/*Gateway*/
async function gatewaySetBypassDevice(bypassPassCodeChecked){	

	const gatewayPromise = new Promise(function(resolve){

		requestSetBypassDevice(bypassPassCodeChecked)
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
window.gatewaySetBypassDevice = gatewaySetBypassDevice;
/*Declare global*/


/*Export*/
export default gatewaySetBypassDevice;
/*Export*/