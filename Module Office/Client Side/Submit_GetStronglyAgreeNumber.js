/*Import*/
import {requestGetStronglyAgreeNumber, stronglyAgreeNumberDetails_Array} from "./Request_GetStronglyAgreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetStronglyAgreeNumber(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetStronglyAgreeNumber(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(stronglyAgreeNumberDetails_Array);
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_GetStronglyAgreeNumber Resolve ${requestPromise}`);
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
window.submitGetStronglyAgreeNumber = submitGetStronglyAgreeNumber;
/*Declare global*/


/*Export*/
export {submitGetStronglyAgreeNumber, blockRequest};
/*Export*/
