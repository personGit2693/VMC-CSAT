function submitRequestPointOfEntry(){
	gatewayPointOfEntry()
	.then((gatewayPromise) =>{
		if(gatewayPromise === true){
			outputPointOfEntryOption();
		}
	});
}