/*Import*/
import gatewayNewRespondentNotifier from "./Gateway_NewRespondentNotifier.js";
import controller_Document_GetNewRespondent from "./Controller_Document_GetNewRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitNewRespondentNotifier(currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayNewRespondentNotifier(currentNewRespondent)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				controller_Document_GetNewRespondent();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitNewRespondentNotifier = submitNewRespondentNotifier;
/*Declare global*/


/*Export*/
export {submitNewRespondentNotifier, blockRequest};
/*Export*/
