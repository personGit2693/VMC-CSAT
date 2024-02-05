/*Import*/
import gatewayVisibilityRates from "./Gateway_VisibilityRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitVisibilityRates(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayVisibilityRates()
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
window.submitVisibilityRates = submitVisibilityRates;
/*Declare global*/


/*Export*/
export {submitVisibilityRates, blockRequest};
/*Export*/
