/*Import*/
import {requestCitizenCharterOneScores} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Gateway*/
async function gatewayCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccOne_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccOne_Id)
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