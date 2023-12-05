/*Import*/
import gatewayOverallDisagree from "./Gateway_OverallDisagree.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallDisagree(renderer_Param, loader_Param, boxLoader_Id, requiredFunction, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				requiredFunction();
				renderer_Param();
				blockRequest = false;			
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallDisagree = submitRequestOverallDisagree;
/*Declaire global*/


/*Export*/
export {submitRequestOverallDisagree, blockRequest};
/*Export*/