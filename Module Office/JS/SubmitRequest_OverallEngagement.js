/*Import*/
import gatewayOverallEngagement from "./Gateway_OverallEngagement.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallEngagement(renderer_Param, loader_Param, boxLoader_Id, submitRequestCountPassScore, outputRatingSpan, outputRatingSpanLoader, ratingSpanLoaderId, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){	
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallEngagement(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				submitRequestCountPassScore(outputRatingSpan, outputRatingSpanLoader, ratingSpanLoaderId, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo);
				renderer_Param();										
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallEngagement = submitRequestOverallEngagement;
/*Declaire global*/


/*Export*/
export {blockRequest, submitRequestOverallEngagement};
/*Export*/