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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				renderer_Param();				
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