function submitRequestOverallEngagement(renderer_Param){	
	
	gatewayOverallEngagement()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();			
			submitRequestCountPassScore(outputRatingSpan);			
		}
	});
}