/*Import*/
import gatewayCcDataTwo from "./Gateway_CcDataTwo.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCcDataTwo(renderer_Param, loader_Param, boxLoader_Id, assignValue, submitRequestQuestionsDataTwo, officeId, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCcDataTwo(officeId, dateFrom, dateTo)
		.then((gatewayPromise) => {

			if(gatewayPromise === true){				

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				submitRequestQuestionsDataTwo(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, dateFrom, dateTo);
				
				blockRequest = false;
			}		
		});
	}
}


/*Declaire global*/
window.submitRequestCcDataTwo = submitRequestCcDataTwo;
/*Declaire global*/


/*Export*/
export {submitRequestCcDataTwo, blockRequest};
/*Export*/