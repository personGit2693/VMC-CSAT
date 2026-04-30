/*Import*/
import {requestName, sample1, sample2} from "./Request_Name.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
var pendingSubmit = [];
/*Export variables*/


/*Submit Function*/
function submitName(controller, dataObj, controllersObj, loaderObj){	

	if(blockRequest === false){

		blockRequest = true;

		/*Display Loader*/
		/*loaderObj.outputLoader();*/
		/*Display Loader*/		


		requestName(dataObj)
		.then(requestPromise => {
			if(requestPromise === true){

				/*Logic here*/
				console.log(`${sample1} ${sample2}`);

				if("myFunctionOrController" in controllersObj){
					controllersObj.myFunctionOrController();
				}
				/*Logic here*/


				/*Remove loader*/
				/*				
				if(document.getElementById(loaderObj.id) !== null){
					
					document.getElementById(loaderObj.id).remove();
				}
				*/				
				/*Remove loader*/
			}else{				
				console.log(`Submit_GetConsultationDetails Resolve ${requestPromise}`);
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
window.submitName = submitName;
/*Declare global*/


/*Export*/
export {submitName, blockRequest};
/*Export*/
