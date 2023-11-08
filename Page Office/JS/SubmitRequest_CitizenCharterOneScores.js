function submitRequestCitizenCharterOneScores(renderer_Param){

	gatewayCitizenCharterOneScores()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();				
		}
	});
}