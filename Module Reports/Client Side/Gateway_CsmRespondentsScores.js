/*Import*/
import {requestCsmRespondentsScores} from "./Request_CsmRespondentsScores.js";
/*Import*/


/*Gateway*/
async function gatewayCsmRespondentsScores(questionActive, internal_clientTypeId, office_id, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCsmRespondentsScores(questionActive, internal_clientTypeId, office_id, dateFrom, dateTo)
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
window.gatewayCsmRespondentsScores = gatewayCsmRespondentsScores;
/*Declare global*/


/*Export*/
export default gatewayCsmRespondentsScores;
/*Export*/