function submitRequestOverallAgree(renderer_Param){
	
	gatewayOverallAgree()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallAgree();
			renderer_Param();						
		}
	});
}