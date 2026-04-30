/*Import*/
import {requestGetDisagreeNumber, disagreeNumberDetails_Array} from "./Request_GetDisagreeNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetDisagreeNumber(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetDisagreeNumber(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(disagreeNumberDetails_Array);
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_GetDisagreeNumber Resolve ${requestPromise}`);
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
window.submitGetDisagreeNumber = submitGetDisagreeNumber;
/*Declare global*/


/*Export*/
export {submitGetDisagreeNumber, blockRequest};
/*Export*/
