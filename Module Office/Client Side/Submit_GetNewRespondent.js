/*Import*/
import {requestGetNewRespondent, countedNewRespondent} from "./Request_GetNewRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGetNewRespondent(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGetNewRespondent(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if("assignValue" in controllersObj){
					controllersObj.assignValue(countedNewRespondent);
				}

				if("controllers_Array" in controllersObj){
					controllersObj.controllers_Array.forEach(function(value, index, array){
						value();
					});
				}
			}else{
				console.log(`Submit_GetNewRespondent Resolve ${requestPromise}`);
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
window.submitGetNewRespondent = submitGetNewRespondent;
/*Declare global*/


/*Export*/
export {submitGetNewRespondent, blockRequest};
/*Export*/
