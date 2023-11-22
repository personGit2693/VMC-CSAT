/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallNoRating(renderer_Param, loader_Param, boxLoader_Id){
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallNoRating()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				valueOverallNoRating();
				renderer_Param();				
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallNoRating = submitRequestOverallNoRating;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/