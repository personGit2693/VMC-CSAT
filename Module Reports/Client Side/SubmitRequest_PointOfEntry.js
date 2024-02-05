/*Import*/
import gatewayPointOfEntry from "./Gateway_PointOfEntry.js";
/*Import*/


/*Export variables*/
var blockRequest = false;
/*Export variables*/


/*Submit Function*/
function submitPointOfEntry(output, boxLoader, boxLoader_Id, searchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display){

	if(blockRequest === false){

		blockRequest = true;

		boxLoader();

		gatewayPointOfEntry(searchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display)
		.then(gatewayPromise => {

			if(document.getElementById(boxLoader_Id) !== null){
					
				document.getElementById(boxLoader_Id).remove();
			}

			
			if(gatewayPromise === true){								

				output();				
			}

			blockRequest = false;
		});
	}
}
/*Submit Function*/


/*Declare global*/
window.submitPointOfEntry = submitPointOfEntry;
/*Declare global*/


/*Export*/
export {submitPointOfEntry, blockRequest};
/*Export*/
