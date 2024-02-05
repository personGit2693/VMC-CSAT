/*Import*/
import {requestTotalAnsweredQuestions} from "./Request_TotalAnsweredQuestions.js";
/*Import*/


/*Gateway*/
async function gatewayTotalAnsweredQuestions(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	const gatewayPromise = new Promise(function(resolve){

		requestTotalAnsweredQuestions(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.gatewayTotalAnsweredQuestions = gatewayTotalAnsweredQuestions;
/*Declare global*/


/*Export*/
export default gatewayTotalAnsweredQuestions;
/*Export*/