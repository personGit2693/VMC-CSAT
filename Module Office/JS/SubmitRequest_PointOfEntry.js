/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestPointOfEntry(renderer_Param, loader_Param, boxLoader_Id){	

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayPointOfEntry()
		.then(gatewayPromise => {

			if(gatewayPromise === true){

				if(document.getElementById(boxLoader_Id) !== null){
					
					document.getElementById(boxLoader_Id).remove();
				}
							
				renderer_Param();
				blockRequest = false;			
			}
		});
	}
}
/*Submit function*/


/*Declaire global*/
window.submitRequestPointOfEntry = submitRequestPointOfEntry;
/*Declaire global*/


/*Export*/
export {submitRequestPointOfEntry, blockRequest};
/*Export*/