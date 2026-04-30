/*Import*/
import {requestCitizenCharterTwoScores} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterTwoScores(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestCitizenCharterTwoScores(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_CitizenCharterTwoScores Resolve ${requestPromise}`);
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
window.submitCitizenCharterTwoScores = submitCitizenCharterTwoScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterTwoScores, blockRequest};
/*Export*/
