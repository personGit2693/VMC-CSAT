/*Import*/

/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


function submitRequestPointOfEntry(renderer_Param, loader_Param, boxLoader_Id){	

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayPointOfEntry()
		.then(gatewayPromise => {

			if(gatewayPromise === true){

				document.getElementById(boxLoader_Id).remove();			
				renderer_Param();
				blockRequest = false;			
			}
		});
	}
}


/*Declaire global*/
window.submitRequestPointOfEntry = submitRequestPointOfEntry;
/*Declaire global*/


/*Export*/
export {blockRequest};
/*Export*/