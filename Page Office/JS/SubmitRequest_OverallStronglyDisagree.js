function submitRequestOverallStronglyDisagree(renderer_Param){
	
	gatewayOverallStronglyDisagree()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallStronglyDisagree();
			renderer_Param();					
		}
	});
}