/*Import*/
import gatewayGetNewRespondent from "./Gateway_GetNewRespondent.js";
import {countedNewRespondent} from "./Request_GetNewRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitGetNewRespondent(assignValue, controllers_Array){

	if(blockRequest === false){

		blockRequest = true;

		gatewayGetNewRespondent()
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){				

				assignValue(countedNewRespondent);

				controllers_Array.forEach(function(value, index, array){

					value();
				});
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitGetNewRespondent = submitGetNewRespondent;
/*Declare global*/


/*Export*/
export {submitGetNewRespondent, blockRequest};
/*Export*/
