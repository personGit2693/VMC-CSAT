/*Import*/
import gatewayValidateCode from "./Gateway_ValidateCode.js";
import {validCode} from "./Request_ValidateCode.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRequestValidateCode(inputCode, controller, notifyNodeBox){

	if(blockRequest === false){

		blockRequest = true;

		gatewayValidateCode(inputCode)
		.then(gatewayPromise => {

			if(gatewayPromise === true){				

				if(validCode === true){
					
					controller();

				}else if(validCode !== true){

					notifyNodeBox(false, "Invalid code", "notiEnterCodeModal-Id");
				}								
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitRequestValidateCode = submitRequestValidateCode;
/*Declare global*/


/*Export*/
export {submitRequestValidateCode, blockRequest};
/*Export*/
