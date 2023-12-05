/*Import*/
import gatewayOverallStronglyAgree from "./Gateway_OverallStronglyAgree.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestOverallStronglyAgree(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();	

		gatewayOverallStronglyAgree(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestOverallStronglyAgree = submitRequestOverallStronglyAgree;
/*Declaire global*/


/*Export*/
export {submitRequestOverallStronglyAgree, blockRequest};
/*Export*/