function submitRequestOverallServRate(renderer_Param){
	
	gatewayOverallServRate()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallServRate();
			renderer_Param();					
		}
	});
}