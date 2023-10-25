function submitRequestQuestionsDataTwo(renderer_Param){
	gatewayQuestionsDataTwo()
	.then((gatewayPromise) => {
		if(gatewayPromise === true){
			valueDataTwo();
			renderer_Param();
		}
	});
}