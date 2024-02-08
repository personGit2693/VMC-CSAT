/*Import*/
import gatewayRespondentCcRates from "./Gateway_RespondentCcRates.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;

		/*boxLoader();*/

		gatewayRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo)
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/

			
			if(gatewayPromise === true){								

						
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
