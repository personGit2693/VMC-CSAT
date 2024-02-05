/*Import*/
import gatewayGenerateAccToken from "./Gateway_GenerateAccToken.js";
import {tokenCreated} from "./Request_GenerateAccToken.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGenerateAccToken(showSpinningLoad, removeSpinningLoad, usernInput, controller){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayGenerateAccToken(usernInput)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(tokenCreated !== 0){

					controller(showSpinningLoad, removeSpinningLoad);

				}else if(tokenCreated === 0){
					
					alert("Account token was not created.");
				}				
			}

			removeSpinningLoad();

			blockRequest = false;						
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGenerateAccToken = submitGenerateAccToken;
/*Declare global*/


/*Export*/
export {submitGenerateAccToken, blockRequest};
/*Export*/
