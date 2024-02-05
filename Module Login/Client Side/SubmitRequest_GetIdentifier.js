/*Import*/
import gatewayGetIdentifier from "./Gateway_GetIdentifier.js";
import {found} from "./Request_GetIdentifier.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetIdentifier(showSpinningLoad, removeSpinningLoad, usernInput, controller){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayGetIdentifier(usernInput)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(found !== 0){

					controller(showSpinningLoad, removeSpinningLoad);

				}else if(found === 0){

					alert("Account is not registered!");
				}				
			}

			removeSpinningLoad();

			blockRequest = false;			
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetIdentifier = submitGetIdentifier;
/*Declare global*/


/*Export*/
export {submitGetIdentifier, blockRequest};
/*Export*/
