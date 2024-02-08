/*Import*/
import gatewayRespondentPerScore from "./Gateway_RespondentPerScore.js";
import {respondentPerScoreDetails_Array} from "./Request_RespondentPerScore.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentPerScore(output, assignValue, clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/		

		gatewayRespondentPerScore(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo)
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/

			assignValue(respondentPerScoreDetails_Array);
			

			if(gatewayPromise === true){								

				output();				

				notifierNewRespondent(currentNewRespondent);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitRespondentPerScore = submitRespondentPerScore;
/*Declare global*/


/*Export*/
export {submitRespondentPerScore, blockRequest};
/*Export*/
