function submitGenerateOfficeCode(){
	
	showSpinningLoad();

	gatewayGenerateOfficeCode()
	.then(gatewayPromise => {
		if(gatewayPromise === true){
			removeSpinningLoad();						
		}
	});	
}