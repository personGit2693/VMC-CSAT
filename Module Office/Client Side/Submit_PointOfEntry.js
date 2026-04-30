/*Import*/
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitPointOfEntry(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		/*Display Loader*/
		loaderObj.boxLoader();
		/*Display Loader*/


		requestPointOfEntry(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				/*Remove loader*/
				if(document.getElementById(loaderObj.boxLoader_Id) !== null){

					document.getElementById(loaderObj.boxLoader_Id).remove();
				}
				/*Remove loader*/

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				/*Remove loader*/
				if(document.getElementById(loaderObj.boxLoader_Id) !== null){

					document.getElementById(loaderObj.boxLoader_Id).remove();
				}
				/*Remove loader*/

				console.log(`Submit_PointOfEntry Resolve ${requestPromise}`);
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
window.submitPointOfEntry = submitPointOfEntry;
/*Declare global*/


/*Export*/
export {submitPointOfEntry, blockRequest};
/*Export*/
