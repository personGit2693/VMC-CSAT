function submitRequestQuestionsTable(renderer_Param){

	gatewayQuestionsTable()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			renderer_Param();				
		}
	});
}