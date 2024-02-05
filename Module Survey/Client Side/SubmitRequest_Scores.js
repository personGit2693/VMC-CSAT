/*Import*/
import gatewayScores from "./Gateway_Scores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitScores(output, boxLoader, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayScores()
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
window.submitScores = submitScores;
/*Declare global*/


/*Export*/
export {submitScores, blockRequest};
/*Export*/
