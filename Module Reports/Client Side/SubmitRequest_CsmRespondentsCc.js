/*Import*/
import gatewayCsmRespondentsCc from "./Gateway_CsmRespondentsCc.js";
import {csmRespondentsCc_Array} from "./Request_CsmRespondentsCc.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentCcRates(output, boxLoader, boxLoader_Id, assignCsmRespondentCc, assignCsmRespondentScores, submits_Obj, questionActive, internal_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCsmRespondentsCc(internal_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								

				assignCsmRespondentCc(csmRespondentsCc_Array);

				submits_Obj.submitCsmRespondentsScores(output, boxLoader, boxLoader_Id, assignCsmRespondentScores, questionActive, internal_clientTypeId, office_id, dateFrom, dateTo);
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
