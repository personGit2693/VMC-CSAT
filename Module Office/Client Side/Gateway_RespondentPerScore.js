/*Import*/
import {requestRespondentPerScore} from "./Request_RespondentPerScore.js";
/*Import*/


/*Gateway*/
async function gatewayRespondentPerScore(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestRespondentPerScore(clientTypeInternal, clientTypeExternal, officeId, dateFrom, dateTo)
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
window.gatewayRespondentPerScore = gatewayRespondentPerScore;
/*Declare global*/


/*Export*/
export default gatewayRespondentPerScore;
/*Export*/