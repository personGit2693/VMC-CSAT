/*Import*/
import gatewayGenerateRateToken from "./Gateway_GenerateRateToken.js";
import {rateToken, endPoint, codeDetails} from "./Request_GenerateRateToken.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRequestGenerateRateToken(token, removeSpinningLoad, showSpinningLoad, inputCode){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayGenerateRateToken(inputCode)
		.then(gatewayPromise => {

			if(gatewayPromise === true){				

				const codeDetails_Base = btoa(unescape(encodeURIComponent(JSON.stringify(codeDetails))));								

				window.location.href = endPoint+"?rateToken="+rateToken+"&codeDetailsBase="+codeDetails_Base+"&token="+token;				
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitRequestGenerateRateToken = submitRequestGenerateRateToken;
/*Declare global*/


/*Export*/
export {submitRequestGenerateRateToken, blockRequest};
/*Export*/
