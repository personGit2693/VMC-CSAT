/*Import*/
import gatewayPointOfEntry from "./Gateway_PointOfEntry.js";
/*Import*/


/*Export variables*/
let blockRequest = false;
/*Export variables*/


/*Submit function*/
function submitRequestPointOfEntry(renderer_Param, loader_Param, boxLoader_Id, searchPointOfEntry, pointOfEntryOptStartIndex, pointOfEntryOptDisplay){	

	if(blockRequest === false){

		blockRequest = true;
		loader_Param();

		gatewayPointOfEntry(searchPointOfEntry, pointOfEntryOptStartIndex, pointOfEntryOptDisplay)
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