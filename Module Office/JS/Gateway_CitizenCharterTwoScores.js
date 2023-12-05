/*Import*/
import {requestCitizenCharterTwoScores} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Gateway*/
async function gatewayCitizenCharterTwoScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	const gatewayPromise = new Promise(function(resolve){

		requestCitizenCharterTwoScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayCitizenCharterTwoScores = gatewayCitizenCharterTwoScores;
/*Declare global*/


/*Export*/
export default gatewayCitizenCharterTwoScores;
/*Export*/