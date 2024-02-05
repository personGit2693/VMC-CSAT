/*Import*/
import {requestQuestionsScoresDetails} from "./Request_QuestionsScoresDetails.js";
/*Import*/


/*Gateway*/
async function gatewayQuestionsScoresDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id){
	
	const gatewayPromise = new Promise(function(resolve){

		requestQuestionsScoresDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id)
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
window.gatewayQuestionsScoresDetails = gatewayQuestionsScoresDetails;
/*Declare global*/


/*Export*/
export default gatewayQuestionsScoresDetails;
/*Export*/