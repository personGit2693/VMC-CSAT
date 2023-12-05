/*Import*/
import gatewayCitizenCharterOneScores from "./Gateway_CitizenCharterOneScores.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCitizenCharterOneScores(renderer_Param, loader_Param, boxLoader_Id, officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCitizenCharterOneScores(officeId, clientTypeInternal, clientTypeExternal, dateFrom, dateTo)
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
window.submitRequestCitizenCharterOneScores = submitRequestCitizenCharterOneScores;
/*Declaire global*/


/*Export*/
export {blockRequest, submitRequestCitizenCharterOneScores};
/*Export*/