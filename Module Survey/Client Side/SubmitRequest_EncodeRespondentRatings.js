/*Import*/
import gatewayEncodeRespondentRatings from "./Gateway_EncodeRespondentRatings.js";
import {execution, validToken, validAccess, serverConnection, rowAffected as encodeRespondentRatings_RowAffected} from "./Request_EncodeRespondentRatings.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEncodeRespondentRatings(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatewayEncodeRespondentRatings(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(validAccess !== true || serverConnection !== null || validToken !== null || execution !== true){

					surveyRatingSender_Obj.submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);

				}else if(validAccess === true && serverConnection === null && validToken === null && execution === true){

					surveyRatingSender_Obj.submitEncodeComments(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitEncodeRespondentRatings = submitEncodeRespondentRatings;
/*Declare global*/


/*Export*/
export {submitEncodeRespondentRatings, blockRequest};
/*Export*/
