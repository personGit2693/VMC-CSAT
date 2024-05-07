/*Import*/
import gatewayEncodeCcRatings from "./Gateway_EncodeCcRatings.js";
import {execution, validToken, validAccess, serverConnection, rowAffected as encodeEncodeCcRatings_RowAffected} from "./Request_EncodeCcRatings.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEncodeCcRatings(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayEncodeCcRatings(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(validAccess !== true || serverConnection !== null || validToken !== null || execution !== true){

					surveyRatingSender_Obj.submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate);					

				}else if(validAccess === true && serverConnection === null && validToken === null && execution === true){

					surveyRatingSender_Obj.submitEncodeRespondentRatings(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitEncodeCcRatings = submitEncodeCcRatings;
/*Declare global*/


/*Export*/
export {submitEncodeCcRatings, blockRequest};
/*Export*/
