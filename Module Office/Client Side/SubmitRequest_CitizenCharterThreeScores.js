/*Import*/
import gatewayCitizenCharterThreeScores from "./Gateway_CitizenCharterThreeScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterThreeScores(output, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccThree_Id){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCitizenCharterThreeScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccThree_Id)
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
window.submitCitizenCharterThreeScores = submitCitizenCharterThreeScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterThreeScores, blockRequest};
/*Export*/
