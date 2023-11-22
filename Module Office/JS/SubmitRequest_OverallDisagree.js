/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallDisagree(renderer_Param, loader_Param, boxLoader_Id){

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallDisagree()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				valueOverallDisagree();
				renderer_Param();			
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallDisagree = submitRequestOverallDisagree;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/