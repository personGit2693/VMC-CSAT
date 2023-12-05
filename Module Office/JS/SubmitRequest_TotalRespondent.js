/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestTotalRespondent(renderer_Param, loader_Param, boxLoader_Id){	
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayTotalRespondent()
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
window.submitRequestTotalRespondent = submitRequestTotalRespondent;
/*Declaire global*/


/*Export*/
export {blockRequest, submitRequestTotalRespondent};
/*Export*/