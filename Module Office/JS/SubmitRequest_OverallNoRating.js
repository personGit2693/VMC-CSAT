function submitRequestOverallNoRating(renderer_Param){
	
	gatewayOverallNoRating()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallNoRating();
			renderer_Param();				
		}
	});
}