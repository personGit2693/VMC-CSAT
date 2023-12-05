/*Import*/
import gatewayOverallNoRating from "./Gateway_OverallNoRating.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallNoRating(renderer_Param, loader_Param, boxLoader_Id, assignValue, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallNoRating(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestOverallNoRating = submitRequestOverallNoRating;
/*Declaire global*/


/*Export*/
export {submitRequestOverallNoRating, blockRequest};
/*Export*/