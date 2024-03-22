/*Import*/
import gatewayCsmRespondentsScores from "./Gateway_CsmRespondentsScores.js";
import {csmRespondentsScores_Array} from "./Request_CsmRespondentsScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function gatewayRespondentQuestionRates(boxLoader, boxLoader_Id, assignValue, questionActive, internal_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCsmRespondentsScores(questionActive, internal_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								

				/*assign value and output CSM Data Components*/
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.gatewayRespondentQuestionRates = gatewayRespondentQuestionRates;
/*Declare global*/


/*Export*/
export {gatewayRespondentQuestionRates, blockRequest};
/*Export*/
