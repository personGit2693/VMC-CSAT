/*Import*/
import gatewayCitizenCharterTwoScores from "./Gateway_CitizenCharterTwoScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterTwoScores(output, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccTwo_Id){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCitizenCharterTwoScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccTwo_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				output();
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
