/*Import*/
import gatewayOverallAgree from "./Gateway_OverallAgree.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallAgree(renderer_Param, loader_Param, boxLoader_Id, requiredFunction, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestOverallAgree = submitRequestOverallAgree;
/*Declaire global*/


/*Export*/
export {submitRequestOverallAgree, blockRequest};
/*Export*/