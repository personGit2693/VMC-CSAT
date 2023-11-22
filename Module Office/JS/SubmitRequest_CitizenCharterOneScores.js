/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestCitizenCharterOneScores(renderer_Param, loader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayCitizenCharterOneScores()
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
window.submitRequestCitizenCharterOneScores = submitRequestCitizenCharterOneScores;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/