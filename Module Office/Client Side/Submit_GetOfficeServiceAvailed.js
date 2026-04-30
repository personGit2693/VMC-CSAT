/*Import*/
import {requestGetOfficeServiceAvailed, availedOfficeService_Array} from "./Request_GetOfficeServiceAvailed.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetOfficeServiceAvailed(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetOfficeServiceAvailed(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(availedOfficeService_Array);
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				console.log(`Submit_GetOfficeServiceAvailed Resolve ${requestPromise}`);
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
window.submitGetOfficeServiceAvailed = submitGetOfficeServiceAvailed;
/*Declare global*/


/*Export*/
export {submitGetOfficeServiceAvailed, blockRequest};
/*Export*/
