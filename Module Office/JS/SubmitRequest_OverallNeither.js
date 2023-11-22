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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				valueOverallNeither();
				renderer_Param();
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