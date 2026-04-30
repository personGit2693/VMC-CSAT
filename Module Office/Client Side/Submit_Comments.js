/*Import*/
import {requestComments, commentDetails_Array} from "./Request_Comments.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitComments(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		/*Display Loader*/
		loaderObj.boxLoader();
		/*Display Loader*/


		requestComments(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				/*Remove loader*/
				if(document.getElementById(loaderObj.boxLoader_Id) !== null){

					document.getElementById(loaderObj.boxLoader_Id).remove();
				}
				/*Remove loader*/

				if(commentDetails_Array.length === 0 && dataObj.comments_PageNo > 1){

					if("valueCommentStartIndex" in controllersObj){
						controllersObj.valueCommentStartIndex(false);
					}
				}

				if("outputFn" in controllersObj){
					controllersObj.outputFn();
				}
			}else{
				/*Remove loader*/
				if(document.getElementById(loaderObj.boxLoader_Id) !== null){

					document.getElementById(loaderObj.boxLoader_Id).remove();
				}
				/*Remove loader*/

				console.log(`Submit_Comments Resolve ${requestPromise}`);
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
window.submitComments = submitComments;
/*Declare global*/


/*Export*/
export {submitComments, blockRequest};
/*Export*/
