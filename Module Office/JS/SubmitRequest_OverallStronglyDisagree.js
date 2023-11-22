/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallStronglyDisagree(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();	

		gatewayOverallStronglyDisagree()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();	
				valueOverallStronglyDisagree();
				renderer_Param();
				blockRequest = false;					
			}
		});
	}
}

/*Declaire global*/
window.submitRequestOverallStronglyDisagree = submitRequestOverallStronglyDisagree;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/