function submitRequestCommentDetails(renderer_Param){
	
	gatewayCommentDetails()
	.then(gatewayPromise => {
		if(gatewayPromise === true){						
			renderer_Param();					
		}
	});
}