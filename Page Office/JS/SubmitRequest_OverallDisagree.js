function submitRequestOverallDisagree(renderer_Param){
	
	gatewayOverallDisagree()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallDisagree();
			renderer_Param();			
		}
	});
}