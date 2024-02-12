/*Import*/
import gatewayDataOneFromDataTwo from "./Gateway_DataOneFromDataTwo.js";
import {dataOne_Array} from "./Request_DataOneFromDataTwo.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitDataOneFromDataTwo(output, boxLoader, boxLoader_Id, valueReferenceNoArray, submitRespondentCcRates, valueRespondentsCcRatingsArray, submitRespondentQuestionRates, valueRespondentsQuestionsRatingsArray, valueRespondentRatingsDetailsArray, questionActive, external_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayDataOneFromDataTwo(external_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}

			
			if(gatewayPromise === true){								

				valueReferenceNoArray(dataOne_Array);

				submitRespondentCcRates(output, boxLoader, boxLoader_Id, valueRespondentsCcRatingsArray, submitRespondentQuestionRates, valueRespondentsQuestionsRatingsArray, valueRespondentRatingsDetailsArray, questionActive, external_clientTypeId, office_id, dateFrom, dateTo);				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitDataOneFromDataTwo = submitDataOneFromDataTwo;
/*Declare global*/


/*Export*/
export {submitDataOneFromDataTwo, blockRequest};
/*Export*/
