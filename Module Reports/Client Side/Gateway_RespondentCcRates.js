/*Import*/
import {requestRespondentCcRates} from "./Request_RespondentCcRates.js";
/*Import*/


/*Gateway*/
async function gatewayRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestRespondentCcRates(external_clientTypeId, office_id, dateFrom, dateTo)
		.then(requestPromise => {

			if(requestPromise === true){
				
				resolve(true);
			}
		});
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayRespondentCcRates = gatewayRespondentCcRates;
/*Declare global*/


/*Export*/
export default gatewayRespondentCcRates;
/*Export*/