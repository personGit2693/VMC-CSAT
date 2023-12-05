/*Import*/
import {requestCitizenCharterOneScores} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Gateway*/
async function gatewayCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayCitizenCharterOneScores = gatewayCitizenCharterOneScores;
/*Declare global*/


/*Export*/
export default gatewayCitizenCharterOneScores;
/*Export*/