/*Import*/
import gatewayCitizenCharterTwoScores from "./Gateway_CitizenCharterTwoScores.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCitizenCharterTwoScores(renderer_Param, loader_Param, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCitizenCharterTwoScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestCitizenCharterTwoScores = submitRequestCitizenCharterTwoScores;
/*Declaire global*/


/*Export*/
export {blockRequest, submitRequestCitizenCharterTwoScores};
/*Export*/