/*Import*/
import gatewayCheckBypassDevice from "./Gateway_CheckBypassDevice.js";
import {bypassIsSet} from "./Request_CheckBypassDevice.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCheckBypassDevice(elem, assignBypassPassCode, checkCusCheckBox){	

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/	

		gatewayCheckBypassDevice()
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/
			
			if(gatewayPromise === true){								

				assignBypassPassCode(bypassIsSet);
				checkCusCheckBox(elem);				
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
