/*Import*/
import {requestCitizenCharterThreeScores} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterThreeScores(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestCitizenCharterThreeScores(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_CitizenCharterThreeScores Resolve ${requestPromise}`);
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
window.submitCitizenCharterThreeScores = submitCitizenCharterThreeScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterThreeScores, blockRequest};
/*Export*/
