/*Import*/
import {requestTotalAnsweredQuestions} from "./Request_TotalAnsweredQuestions.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitTotalAnsweredQuestions(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestTotalAnsweredQuestions(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}

				if("controllerDisplayRating" in controllersObj){
					controllersObj.controllerDisplayRating();
				}
			}else{
				console.log(`Submit_TotalAnsweredQuestions Resolve ${requestPromise}`);
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
window.submitTotalAnsweredQuestions = submitTotalAnsweredQuestions;
/*Declare global*/


/*Export*/
export {submitTotalAnsweredQuestions, blockRequest};
/*Export*/
