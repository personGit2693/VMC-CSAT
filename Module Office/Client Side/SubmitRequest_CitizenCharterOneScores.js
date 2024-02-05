/*Import*/
import gatewayCitizenCharterOneScores from "./Gateway_CitizenCharterOneScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterOneScores(output, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccOne_Id, notifierNewRespondent, currentNewRespondent){

	if(blockRequest === false){

		blockRequest = true;

		gatewayCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccOne_Id)
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
window.submitCitizenCharterOneScores = submitCitizenCharterOneScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterOneScores, blockRequest};
/*Export*/
