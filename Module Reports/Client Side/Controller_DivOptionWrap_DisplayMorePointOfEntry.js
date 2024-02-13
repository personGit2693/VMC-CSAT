/*Import*/
import {valueSearchAreaPointOfEntryStartIndex, searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Reports.js";
import {submitPointOfEntry, blockRequest} from "./SubmitRequest_PointOfEntry.js";
import outputSearchAreaPointOfEntryOptionStack from "./Output_SearchAreaPointOfEntryOptionStack.js";
import outputSearchAreaPointOfEntryOptionLoader from "./Output_SearchAreaPointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_DivOptionWrap_DisplayMorePointOfEntry(searchAreaPointOfEntryWrap){	

	if((searchAreaPointOfEntryWrap.scrollTop + searchAreaPointOfEntryWrap.offsetHeight) >= searchAreaPointOfEntryWrap.scrollHeight){

		if(blockRequest === false){		

			valueSearchAreaPointOfEntryStartIndex();

			submitPointOfEntry(outputSearchAreaPointOfEntryOptionStack, outputSearchAreaPointOfEntryOptionLoader, "searchAreaPointOfEntryOptionLoader-Id", searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display);
		}
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_DivOptionWrap_DisplayMorePointOfEntry = controller_DivOptionWrap_DisplayMorePointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_DivOptionWrap_DisplayMorePointOfEntry;
/*Export*/