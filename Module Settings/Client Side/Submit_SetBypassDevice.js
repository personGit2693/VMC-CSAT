/*Import*/
import gatewaySetBypassDevice from "./Gateway_SetBypassDevice.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitSetBypassDevice(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/

		let bypassPassCodeChecked = dataObj.elem.checked;

		gatewaySetBypassDevice(bypassPassCodeChecked)
		.then(gatewayPromise => {

			/*
			if(document.getElementById(loaderObj.boxLoader_Id) !== null){

				document.getElementById(loaderObj.boxLoader_Id).remove();
			}
			*/

			if(gatewayPromise === true){

				controllersObj.checkCusCheckBox(dataObj.elem);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitSetBypassDevice = submitSetBypassDevice;
/*Declare global*/


/*Export*/
export {submitSetBypassDevice, blockRequest};
/*Export*/
