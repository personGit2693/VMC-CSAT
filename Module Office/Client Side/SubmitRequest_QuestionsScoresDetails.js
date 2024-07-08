/*Import*/
import gatewayQuestionsScoresDetails from "./Gateway_QuestionsScoresDetails.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitQuestionsScoresDetails(output, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id){

	if(blockRequest === false){

		blockRequest = true;

		gatewayQuestionsScoresDetails(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, stronglyAgree_Id, agree_Id, noRating_Id, neither_Id, disagree_Id, stronglyDisagree_Id, dimensionComment_Id)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){								

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitQuestionsScoresDetails = submitQuestionsScoresDetails;
/*Declare global*/


/*Export*/
export {submitQuestionsScoresDetails, blockRequest};
/*Export*/
