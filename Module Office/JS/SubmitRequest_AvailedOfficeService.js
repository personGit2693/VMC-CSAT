function submitRequestAvailedOfficeService(renderer_Param){
	
	gatewayAvailedOfficeService()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			valueAvailedOfficeService();
			renderer_Param();			
		}
	});
}