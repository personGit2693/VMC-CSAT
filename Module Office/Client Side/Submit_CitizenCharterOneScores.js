/*Import*/
import {requestCitizenCharterOneScores} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitCitizenCharterOneScores(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestCitizenCharterOneScores(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_CitizenCharterOneScores Resolve ${requestPromise}`);
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
window.submitCitizenCharterOneScores = submitCitizenCharterOneScores;
/*Declare global*/


/*Export*/
export {submitCitizenCharterOneScores, blockRequest};
/*Export*/
