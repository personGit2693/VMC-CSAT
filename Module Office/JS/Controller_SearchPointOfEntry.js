/*Import*/
import {blockRequest} from "./SubmitRequest_PointOfEntry.js";
/*Import*/


function controllerSearchPointOfEntry(){

	if(blockRequest === false){
		valueResetSearchPointOfEntry();
		submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");
	}	
}


/*Declare global*/
window.controllerSearchPointOfEntry = controllerSearchPointOfEntry;
/*Declare global*/