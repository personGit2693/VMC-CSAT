/*Import*/
import gatewayAccountSession from "./Gateway_AccountSession.js";
import {endpoint} from "./Request_AccountSession.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitAccountSession(showSpinningLoad, removeSpinningLoad, accountDetails_Obj, accToken){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayAccountSession(accountDetails_Obj, accToken)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				window.location.href = endpoint;
			}

			removeSpinningLoad();

			blockRequest = false;						
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitAccountSession = submitAccountSession;
/*Declare global*/


/*Export*/
export {submitAccountSession, blockRequest};
/*Export*/
