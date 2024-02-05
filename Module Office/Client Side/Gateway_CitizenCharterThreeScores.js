/*Import*/
import {requestCitizenCharterThreeScores} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Gateway*/
async function gatewayCitizenCharterThreeScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccThree_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestCitizenCharterThreeScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, ccThree_Id)
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
window.gatewayCitizenCharterThreeScores = gatewayCitizenCharterThreeScores;
/*Declare global*/


/*Export*/
export default gatewayCitizenCharterThreeScores;
/*Export*/