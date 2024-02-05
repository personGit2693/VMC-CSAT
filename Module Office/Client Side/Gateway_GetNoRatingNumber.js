/*Import*/
import {requestGetNoRatingNumber} from "./Request_GetNoRatingNumber.js";
/*Import*/


/*Gateway*/
async function gatewayGetNoRatingNumber(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestGetNoRatingNumber(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayGetNoRatingNumber = gatewayGetNoRatingNumber;
/*Declare global*/


/*Export*/
export default gatewayGetNoRatingNumber;
/*Export*/