/*Import*/
import gatewayCsmRespondentsCc from "./Gateway_CsmRespondentsCc.js";
import {csmRespondentsCc_Array} from "./Request_CsmRespondentsCc.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentCcRates(boxLoader, boxLoader_Id, assignCsmRespondentCc, submits_Obj, internal_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCsmRespondentsCc(internal_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								

				/*assign value and get question response*/
				assignCsmRespondentCc(csmRespondentsCc_Array);
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
