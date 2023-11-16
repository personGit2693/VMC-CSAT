function submitRequestTotalRespondent(renderer_Param){	
	
	gatewayTotalRespondent()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();			
		}
	});
}