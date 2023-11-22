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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				valueOverallAgree();
				renderer_Param();						
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