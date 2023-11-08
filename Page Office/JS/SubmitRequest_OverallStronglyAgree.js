function submitRequestOverallStronglyAgree(renderer_Param){
	
	gatewayOverallStronglyAgree()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueOverallStronglyAgree();
			renderer_Param();					
		}
	});
}