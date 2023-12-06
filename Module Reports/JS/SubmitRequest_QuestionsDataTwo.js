/*Import*/
import gatewayQuestionsDataTwo from "./Gateway_QuestionsDataTwo.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestQuestionsDataTwo(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayQuestionsDataTwo(officeId, dateFrom, dateTo)
		.then((gatewayPromise) => {

			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				assignValue();
				renderer_Param();

				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestQuestionsDataTwo = submitRequestQuestionsDataTwo;
/*Declaire global*/


/*Export*/
export {submitRequestQuestionsDataTwo, blockRequest};
/*Export*/
