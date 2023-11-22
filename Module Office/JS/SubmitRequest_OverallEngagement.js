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

				document.getElementById(boxLoader_Id).remove();
				blockRequest = false;
				renderer_Param();			
				submitRequestCountPassScore(outputRatingSpan, outputRatingSpanLoader, "ratingSpanLoader-Id");			
			}
		});
	}
}


/*Declaire global*/
window.submitRequestOverallEngagement = submitRequestOverallEngagement;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/