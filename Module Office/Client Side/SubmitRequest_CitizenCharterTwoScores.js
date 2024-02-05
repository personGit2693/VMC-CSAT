/*Import*/
import gatewayCitizenCharterTwoScores from "./Gateway_CitizenCharterTwoScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterTwoScores(output, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccTwo_Id, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCitizenCharterTwoScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccTwo_Id)
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
window.submitCitizenCharterTwoScores = submitCitizenCharterTwoScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterTwoScores, blockRequest};
/*Export*/
