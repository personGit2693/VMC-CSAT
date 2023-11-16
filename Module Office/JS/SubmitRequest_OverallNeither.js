function submitRequestOverallNeither(renderer_Param){
	
	gatewayOverallNeither()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallNeither();
			renderer_Param();
		}
	});
}