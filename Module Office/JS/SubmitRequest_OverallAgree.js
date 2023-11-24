/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallAgree(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallAgree()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				
				valueOverallAgree();
				renderer_Param();						
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallAgree = submitRequestOverallAgree;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/