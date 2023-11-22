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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				renderer_Param();					
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