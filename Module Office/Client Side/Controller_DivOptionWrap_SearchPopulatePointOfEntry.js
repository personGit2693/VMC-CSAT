/*Import*/
import {valuePointOfEntry_StartIndex, searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Office.js";
import {submitPointOfEntry, blockRequest} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOptionStack from "./Output_PointOfEntryOptionStack.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_DivOptionWrap_SearchPopulatePointOfEntry(divOptionWrap){

	if((divOptionWrap.scrollTop + divOptionWrap.offsetHeight) >= divOptionWrap.scrollHeight){
		
		if(blockRequest === false){
		
			valuePointOfEntry_StartIndex();

			submitPointOfEntry(outputPointOfEntryOptionStack, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id", searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display);	
		}		
	}
}
/*Controller*/


/*Declare Global*/
window.controller_DivOptionWrap_SearchPopulatePointOfEntry = controller_DivOptionWrap_SearchPopulatePointOfEntry
/*Declare Global*/


/*Export*/
export default controller_DivOptionWrap_SearchPopulatePointOfEntry;
/*Export*/