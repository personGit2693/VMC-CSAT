/*Import*/
import {requestRespondentPerScore, respondentPerScoreDetails_Array} from "./Request_RespondentPerScore.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitRespondentPerScore(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestRespondentPerScore(dataObj)
		.then(requestPromise => {

			if("assignValue" in controllersObj){
				controllersObj.assignValue(respondentPerScoreDetails_Array);
			}

			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_RespondentPerScore Resolve ${requestPromise}`);
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
window.submitRespondentPerScore = submitRespondentPerScore;
/*Declare global*/


/*Export*/
export {submitRespondentPerScore, blockRequest};
/*Export*/
