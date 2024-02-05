/*Import*/
import gatewayCheckCredential from "./Gateway_CheckCredential.js";
import {validAccount} from "./Request_CheckCredential.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCheckCredential(showSpinningLoad, removeSpinningLoad, usernInput, passInput, account_identifier, controller){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayCheckCredential(usernInput, passInput, account_identifier)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(validAccount !== 0){

					controller(showSpinningLoad, removeSpinningLoad);

				}else if(validAccount === 0){

					alert("Wrong password!");
				}				
			}

			removeSpinningLoad();

			blockRequest = false;						
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitCheckCredential = submitCheckCredential;
/*Declare global*/


/*Export*/
export {submitCheckCredential, blockRequest};
/*Export*/
