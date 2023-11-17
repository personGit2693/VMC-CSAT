function submitRequestPointOfEntry(renderer_Param){
	gatewayPointOfEntry()
	.then((gatewayPromise) =>{
		if(gatewayPromise === true){
			renderer_Param();
		}
	});
}