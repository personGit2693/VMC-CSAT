function submitRequestCcDataTwo(){
	gatewayCcDataTwo()
	.then((gatewayPromise) => {
		if(gatewayPromise === true){
			submitRequestQuestionsDataTwo(outputDataTwoTable);
		}		
	});
}