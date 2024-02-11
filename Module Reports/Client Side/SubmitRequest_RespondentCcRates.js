/*Import*/
import gatewayRespondentCcRates from "./Gateway_RespondentCcRates.js";
import {respondentCcRatingDetails_Array} from "./Request_RespondentCcRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentCcRates(output, boxLoader, boxLoader_Id, valueRespondentsCcRatingsArray, submitRespondentQuestionRates, valueRespondentsQuestionsRatingsArray, questionActive, external_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								

				valueRespondentsCcRatingsArray(respondentCcRatingDetails_Array);

				submitRespondentQuestionRates(output, boxLoader, boxLoader_Id, valueRespondentsQuestionsRatingsArray, questionActive, external_clientTypeId, office_id, dateFrom, dateTo);		
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitRespondentCcRates = submitRespondentCcRates;
/*Declare global*/


/*Export*/
export {submitRespondentCcRates, blockRequest};
/*Export*/
