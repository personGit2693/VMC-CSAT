/*Import*/
import {requestRespondentQuestionRates} from "./Request_RespondentQuestionRates.js";
/*Import*/


/*Gateway*/
async function gatewayRespondentQuestionRates(questionActive, external_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestRespondentQuestionRates(questionActive, external_clientTypeId, office_id, dateFrom, dateTo)
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
window.gatewayRespondentQuestionRates = gatewayRespondentQuestionRates;
/*Declare global*/


/*Export*/
export default gatewayRespondentQuestionRates;
/*Export*/