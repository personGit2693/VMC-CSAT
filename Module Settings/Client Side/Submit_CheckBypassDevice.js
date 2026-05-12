/*Import*/
import gatewayCheckBypassDevice from "./Gateway_CheckBypassDevice.js";
import {bypassIsSet} from "./Request_CheckBypassDevice.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCheckBypassDevice(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/

		gatewayCheckBypassDevice()
		.then(gatewayPromise => {

			/*
			if(document.getElementById(loaderObj.boxLoader_Id) !== null){

				document.getElementById(loaderObj.boxLoader_Id).remove();
			}
			*/

			if(gatewayPromise === true){

				controllersObj.assignBypassPassCode(bypassIsSet);
				controllersObj.checkCusCheckBox(dataObj.elem);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitCheckBypassDevice = submitCheckBypassDevice;
/*Declare global*/


/*Export*/
export {submitCheckBypassDevice, blockRequest};
/*Export*/
