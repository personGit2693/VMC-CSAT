/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCitizenCharterTwoScores(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCitizenCharterTwoScores()
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
export {blockRequest};
/*Export*/