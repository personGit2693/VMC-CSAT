/*Import*/
import gatewayHelpfulnessRates from "./Gateway_HelpfulnessRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitHelpfulnessRates(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayHelpfulnessRates()
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
window.submitHelpfulnessRates = submitHelpfulnessRates;
/*Declare global*/


/*Export*/
export {submitHelpfulnessRates, blockRequest};
/*Export*/
