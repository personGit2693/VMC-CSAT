/*Import*/
import gatewayCheckBypassDevice from "./Gateway_CheckBypassDevice.js";
import {bypassIsSet, officeCodeCreated, generatedOfficeCode} from "./Request_CheckBypassDevice.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCheckBypassDevice(assignInputCode, controller_Document_ShowInputCodeModal, controller_Document_ShowRateOurServBtn){	

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

				if(bypassIsSet === true){

					assignInputCode(generatedOfficeCode);
					controller_Document_ShowRateOurServBtn();

				}else if(bypassIsSet !== true){

					controller_Document_ShowInputCodeModal();
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
