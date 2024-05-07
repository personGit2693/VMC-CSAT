/*Import*/
import gatewayCheckEncodedAll from "./Gateway_CheckEncodedAll.js";
import {found, endPoint} from "./Request_CheckEncodedAll.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCheckEncodedAll(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayCheckEncodedAll(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(found != 0){

					surveyRatingSender_Obj.submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate);

				}else if(found == 0){

					window.location.href = endPoint;
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitCheckEncodedAll = submitCheckEncodedAll;
/*Declare global*/


/*Export*/
export {submitCheckEncodedAll, blockRequest};
/*Export*/
