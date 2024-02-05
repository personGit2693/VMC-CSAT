/*Import*/
import gatewayEncodeRespondentDetails from "./Gateway_EncodeRespondentDetails.js";
import {rowAffected as encodeRespondentDetails_RowAffected} from "./Request_EncodeRespondentDetails.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEncodeRespondentDetails(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayEncodeRespondentDetails(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								
				
				if(encodeRespondentDetails_RowAffected != 0){

					surveyRatingSender_Obj.submitEncodeCcRatings(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitEncodeRespondentDetails = submitEncodeRespondentDetails;
/*Declare global*/


/*Export*/
export {submitEncodeRespondentDetails, blockRequest};
/*Export*/
