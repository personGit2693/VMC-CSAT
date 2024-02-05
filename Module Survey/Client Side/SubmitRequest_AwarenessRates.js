/*Import*/
import gatewayAwarenessRates from "./Gateway_AwarenessRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitAwarenessRates(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayAwarenessRates()
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			

			if(gatewayPromise === true){								

				output();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitAwarenessRates = submitAwarenessRates;
/*Declare global*/


/*Export*/
export {submitAwarenessRates, blockRequest};
/*Export*/
