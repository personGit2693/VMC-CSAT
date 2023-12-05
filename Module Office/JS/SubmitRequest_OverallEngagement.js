/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestOverallEngagement(renderer_Param, loader_Param, boxLoader_Id){	
	
	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayOverallEngagement()
		.then(gatewayPromise => {
			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}

				renderer_Param();			
				submitRequestCountPassScore(outputRatingSpan, outputRatingSpanLoader, "ratingSpanLoader-Id");			
				blockRequest = false;
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallEngagement = submitRequestOverallEngagement;
/*Declaire global*/


/*Export*/
export {blockRequest, submitRequestOverallEngagement};
/*Export*/