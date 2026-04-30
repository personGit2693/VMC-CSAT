/*Import*/
import {requestGetNeitherNumber, neitherNumberDetails_Array} from "./Request_GetNeitherNumber.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetNeitherNumber(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetNeitherNumber(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(neitherNumberDetails_Array);
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_GetNeitherNumber Resolve ${requestPromise}`);
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
window.submitGetNeitherNumber = submitGetNeitherNumber;
/*Declare global*/


/*Export*/
export {submitGetNeitherNumber, blockRequest};
/*Export*/
