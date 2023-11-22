/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallServRate(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallServRate()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				valueOverallServRate();
				renderer_Param();					
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallServRate = submitRequestOverallServRate;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/