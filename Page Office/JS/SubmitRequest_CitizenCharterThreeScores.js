function submitRequestCitizenCharterThreeScores(renderer_Param){
	
	gatewayCitizenCharterThreeScores()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();					
		}
	});
}