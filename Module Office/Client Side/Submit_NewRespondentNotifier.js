/*Import*/
import {requestNewRespondentNotifier} from "./Request_NewRespondentNotifier.js";
import controller_Document_GetNewRespondent from "./Controller_Document_GetNewRespondent.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitNewRespondentNotifier(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestNewRespondentNotifier(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				controller_Document_GetNewRespondent();
			}else{
				console.log(`Submit_NewRespondentNotifier Resolve ${requestPromise}`);
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
window.submitNewRespondentNotifier = submitNewRespondentNotifier;
/*Declare global*/


/*Export*/
export {submitNewRespondentNotifier, blockRequest};
/*Export*/
