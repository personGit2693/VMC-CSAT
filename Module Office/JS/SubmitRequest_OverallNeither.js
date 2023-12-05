/*Import*/
import gatewayOverallNeither from "./Gateway_OverallNeither.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallNeither(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallNeither(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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


/*Declaire global*/
window.submitRequestOverallNeither = submitRequestOverallNeither;
/*Declaire global*/


/*Export*/
export {submitRequestOverallNeither, blockRequest};
/*Export*/