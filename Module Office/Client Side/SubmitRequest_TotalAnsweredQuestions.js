/*Import*/
import gatewayTotalAnsweredQuestions from "./Gateway_TotalAnsweredQuestions.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitTotalAnsweredQuestions(output, officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo, notifierNewRespondent, currentNewRespondent, controllerDisplayRating){

	if(blockRequest === false){

		blockRequest = true;

		//boxLoader();

		gatewayTotalAnsweredQuestions(officeId, noRating_Id, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {

			/*
			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}
			*/
			

			if(gatewayPromise === true){								

				output();

				controllerDisplayRating();				

				notifierNewRespondent(currentNewRespondent);
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitTotalAnsweredQuestions = submitTotalAnsweredQuestions;
/*Declare global*/


/*Export*/
export {submitTotalAnsweredQuestions, blockRequest};
/*Export*/
