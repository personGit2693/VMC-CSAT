/*Import*/
import gatawayEncodeComments from "./Gateway_EncodeComments.js";
import {execution, validToken, validAccess, serverConnection, endPoint, rowAffected as encodeComments_RowAffected} from "./Request_EncodeComments.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitEncodeComments(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj){

	if(blockRequest === false){

		blockRequest = true;

		showSpinningLoad();

		gatawayEncodeComments(submittedRate)
		.then(gatewayPromise => {			
			
			if(gatewayPromise === true){								

				if(validAccess !== true || serverConnection !== null || validToken !== null || execution === false){

					surveyRatingSender_Obj.submitDeleteEncoded(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);

				}else if(validAccess === true && serverConnection === null && validToken === null && execution !== false){

					surveyRatingSender_Obj.submitEncodeNewRespondent(showSpinningLoad, removeSpinningLoad, submittedRate, surveyRatingSender_Obj);
				}
			}

			removeSpinningLoad();

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitEncodeComments = submitEncodeComments;
/*Declare global*/


/*Export*/
export {submitEncodeComments, blockRequest};
/*Export*/
