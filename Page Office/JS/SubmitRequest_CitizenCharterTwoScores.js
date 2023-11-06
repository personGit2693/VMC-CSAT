function submitRequestCitizenCharterTwoScores(renderer_Param){
	
	gatewayCitizenCharterTwoScores()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();			
		}
	});
}