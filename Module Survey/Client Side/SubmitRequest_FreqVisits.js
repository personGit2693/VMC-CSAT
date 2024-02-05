/*Import*/
import gatewayFreqVisits from "./Gateway_FreqVisits.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitFreqVisits(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayFreqVisits()
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
window.submitFreqVisits = submitFreqVisits;
/*Declare global*/


/*Export*/
export {submitFreqVisits, blockRequest};
/*Export*/
