/*Import*/
import {requestCsmRespondentsCc} from "./Request_CsmRespondentsCc.js";
/*Import*/


/*Gateway*/
async function gatewayCsmRespondentsCc(internal_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCsmRespondentsCc(internal_clientTypeId, office_id, dateFrom, dateTo)
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
window.gatewayCsmRespondentsCc = gatewayCsmRespondentsCc;
/*Declare global*/


/*Export*/
export default gatewayCsmRespondentsCc;
/*Export*/