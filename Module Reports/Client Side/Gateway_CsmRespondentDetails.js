/*Import*/
import {requestCsmRespondentDetails} from "./Request_CsmRespondentDetails.js";
/*Import*/


/*Gateway*/
async function gatewayCsmRespondentDetails(internal_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCsmRespondentDetails(internal_clientTypeId, office_id, dateFrom, dateTo)
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
window.gatewayCsmRespondentDetails = gatewayCsmRespondentDetails;
/*Declare global*/


/*Export*/
export default gatewayCsmRespondentDetails;
/*Export*/