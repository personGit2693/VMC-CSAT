/*Import*/
import {valueResetSearchPointOfEntry} from "../../Global JS/Values_Module_Reports.js";
/*Import*/


/*When searching for point of entry*/
function controllerPointOfEntrySearch(){
	
	valueResetSearchPointOfEntry();

	submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");	
}
/*When searching for point of entry*/


/*Declare Global*/
window.controllerPointOfEntrySearch = controllerPointOfEntrySearch;
/*Declare Global*/