/*Import*/
import {requestGetStronglyDisagreeNumber, stronglyDisagreeNumberDetails_Array} from "./Request_GetStronglyDisagreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetStronglyDisagreeNumber(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetStronglyDisagreeNumber(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(stronglyDisagreeNumberDetails_Array);
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_GetStronglyDisagreeNumber Resolve ${requestPromise}`);
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
window.submitGetStronglyDisagreeNumber = submitGetStronglyDisagreeNumber;
/*Declare global*/


/*Export*/
export {submitGetStronglyDisagreeNumber, blockRequest};
/*Export*/
