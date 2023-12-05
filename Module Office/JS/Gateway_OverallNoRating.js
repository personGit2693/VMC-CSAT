/*Import*/
import {requestOverallNoRating} from "./Request_OverallNoRating.js";
/*Import*/


/*Gateway*/
async function gatewayOverallNoRating(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestOverallNoRating(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayOverallNoRating = gatewayOverallNoRating;
/*Declare global*/


/*Export*/
export default gatewayOverallNoRating;
/*Export*/