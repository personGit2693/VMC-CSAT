/*Import*/
import gatewayCheckBypassDevice from "./Gateway_CheckBypassDevice.js";
import {bypassIsSet, officeCodeCreated, generatedOfficeCode} from "./Request_CheckBypassDevice.js";
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

				if(bypassIsSet === true){

					controllersObj.assignInputCode(generatedOfficeCode);
					controllersObj.showRateOurServBtn();

				}else if(bypassIsSet !== true){

					controllersObj.showInputCodeModal();
				}
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
