/*Import*/
import {requestQuestionsScoresDetails} from "./Request_QuestionsScoresDetails.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitQuestionsScoresDetails(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestQuestionsScoresDetails(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_QuestionsScoresDetails Resolve ${requestPromise}`);
			}


			blockRequest = false;

			if(pendingSubmit.length > 0){
				pendingSubmit.shift()(dataObj.elem);
			}
		});
	}else if(blockRequest === true){
		pendingSubmit.push(controller);
	}
}
/*Submit Function*/


/*Declare global*/
window.submitQuestionsScoresDetails = submitQuestionsScoresDetails;
/*Declare global*/


/*Export*/
export {submitQuestionsScoresDetails, blockRequest};
/*Export*/
