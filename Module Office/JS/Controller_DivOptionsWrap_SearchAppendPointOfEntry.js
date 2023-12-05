/*Import*/
import {pointOfEntryOptStartIndex, pointOfEntryOptDisplay, valueSearchPointOfEntryOptStartIndex} from "../../Global JS/Values_Module_Office.js";
import {searchPointOfEntry} from "../../Global JS/JSCollection_Module_Office.js";
import {submitRequestPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller for invoking valueSearchPointOfEntryOptStartIndex and submitRequestPointOfEntry*/
function controller_divOptionsWrap_SearchAppendPointOfEntry(searchDivOptionsWrap){

	if((searchDivOptionsWrap.scrollTop + searchDivOptionsWrap.offsetHeight) >= searchDivOptionsWrap.scrollHeight){
		
		valueSearchPointOfEntryOptStartIndex();
		submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id", searchPointOfEntry, pointOfEntryOptStartIndex, pointOfEntryOptDisplay);	
	}
}
/*Controller for invoking valueSearchPointOfEntryOptStartIndex and submitRequestPointOfEntry*/


/*Declare Global*/
window.controller_divOptionsWrap_SearchAppendPointOfEntry = controller_divOptionsWrap_SearchAppendPointOfEntry
/*Declare Global*/


/*Export*/
export default controller_divOptionsWrap_SearchAppendPointOfEntry;
/*Export*/