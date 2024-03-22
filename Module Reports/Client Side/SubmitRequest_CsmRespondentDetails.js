/*Import*/
import gatewayCsmRespondentDetails from "./Gateway_CsmRespondentDetails.js";
import {csmRespondentsDetails_Array} from "./Request_CsmRespondentDetails.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitCsmRespondentDetails(boxLoader, boxLoader_Id, assignCsmRespondentDetails, assignCsmRespondentCc, submits_Obj, internal_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayCsmRespondentDetails(internal_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}			

			
			if(gatewayPromise === true){								
				
				assignCsmRespondentDetails(csmRespondentsDetails_Array);

				submits_Obj.submitRespondentCcRates(boxLoader, boxLoader_Id, assignCsmRespondentCc, submits_Obj, internal_clientTypeId, office_id, dateFrom, dateTo);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitCsmRespondentDetails = submitCsmRespondentDetails;
/*Declare global*/


/*Export*/
export {submitCsmRespondentDetails, blockRequest};
/*Export*/
