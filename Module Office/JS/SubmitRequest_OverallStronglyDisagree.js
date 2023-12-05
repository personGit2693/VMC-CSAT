/*Import*/
import gatewayOverallStronglyDisagree from "./Gateway_OverallStronglyDisagree.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestOverallStronglyDisagree(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();	

		gatewayOverallStronglyDisagree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}
					
				assignValue();
				renderer_Param();
				blockRequest = false;					
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestOverallStronglyDisagree = submitRequestOverallStronglyDisagree;
/*Declaire global*/


/*Export*/
export {submitRequestOverallStronglyDisagree, blockRequest};
/*Export*/