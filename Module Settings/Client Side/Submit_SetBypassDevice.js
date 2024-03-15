/*Import*/
import gatewaySetBypassDevice from "./Gateway_SetBypassDevice.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitSetBypassDevice(elem, checkCusCheckBox){	

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/

		let bypassPassCodeChecked = elem.checked;		

		gatewaySetBypassDevice(bypassPassCodeChecked)
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/
			
			if(gatewayPromise === true){								

				checkCusCheckBox(elem);				
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
