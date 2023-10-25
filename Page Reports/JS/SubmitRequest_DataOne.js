function submitRequestDataOne(renderer_Param){
	gatewayDataOne()
	.then((gatewayPromise) => {
		if(gatewayPromise === true){
			renderer_Param();
		}
	});
}