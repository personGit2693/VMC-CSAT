/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallNeither(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallNeither()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				valueOverallNeither();
				renderer_Param();
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallNeither = submitRequestOverallNeither;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/