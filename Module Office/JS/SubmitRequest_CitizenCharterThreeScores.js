/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCitizenCharterThreeScores(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCitizenCharterThreeScores()
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
window.submitRequestCitizenCharterThreeScores = submitRequestCitizenCharterThreeScores;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/