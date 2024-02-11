/*Import*/
import gatewayRespondentQuestionRates from "./Gateway_RespondentQuestionRates.js";
import {respondentQuestionRateDetails_Array} from "./Request_RespondentQuestionRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentQuestionRates(output, boxLoader, boxLoader_Id, valueRespondentsQuestionsRatingsArray, questionActive, external_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayRespondentQuestionRates(questionActive, external_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								

				valueRespondentsQuestionsRatingsArray(respondentQuestionRateDetails_Array);

				output();
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitRespondentQuestionRates = submitRespondentQuestionRates;
/*Declare global*/


/*Export*/
export {submitRespondentQuestionRates, blockRequest};
/*Export*/
