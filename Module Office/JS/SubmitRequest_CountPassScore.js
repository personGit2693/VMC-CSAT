/*Import*/
import gatewayCountPassScore from "./Gateway_CountPassScore.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCountPassScore(renderer_Param, loader_Param, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){	
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCountPassScore(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
		.then(gatewayPromise => {
			
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				renderer_Param();
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestCountPassScore = submitRequestCountPassScore;
/*Declaire global*/


/*Export*/
export {submitRequestCountPassScore, blockRequest};
/*Export*/