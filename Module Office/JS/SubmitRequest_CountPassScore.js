function submitRequestCountPassScore(renderer_Param){	
	
	gatewayCountPassScore()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();
		}
	});
}