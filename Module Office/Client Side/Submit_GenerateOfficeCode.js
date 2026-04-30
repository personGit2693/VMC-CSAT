/*Import*/
import {requestGenerateOfficeCode, generatedOfficeCode} from "./Request_GenerateOfficeCode.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitGenerateOfficeCode(controller, dataObj, controllersObj, loaderObj){

	if(blockRequest === false){

		blockRequest = true;

		requestGenerateOfficeCode(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				if(generatedOfficeCode == "" || generatedOfficeCode == null){

					alert("Please try again with selected point of entry.");

				}else if(generatedOfficeCode != "" && generatedOfficeCode != null){

					alert("Please provide this passcode to the client: "+generatedOfficeCode);
				}
			}else{
				console.log(`Submit_GenerateOfficeCode Resolve ${requestPromise}`);
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
window.submitGenerateOfficeCode = submitGenerateOfficeCode;
/*Declare global*/


/*Export*/
export {submitGenerateOfficeCode, blockRequest};
/*Export*/
