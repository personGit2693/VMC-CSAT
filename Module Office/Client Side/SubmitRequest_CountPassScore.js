/*Import*/
import gatewayCountPassScore from "./Gateway_CountPassScore.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCountPassScore(output, officeId, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCountPassScore(officeId, stronglyAgree_Id, agree_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			
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
window.submitCountPassScore = submitCountPassScore;
/*Declare global*/


/*Export*/
export {submitCountPassScore, blockRequest};
/*Export*/
