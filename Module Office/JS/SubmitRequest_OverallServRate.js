/*Import*/
import gatewayOverallServRate from "./Gateway_OverallServRate.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallServRate(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallServRate(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestOverallServRate = submitRequestOverallServRate;
/*Declaire global*/


/*Export*/
export {submitRequestOverallServRate, blockRequest};
/*Export*/