/*Import*/
import {searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Reports.js";
import {submitPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputSearchAreaPointOfEntryOption from "./Output_SearchAreaPointOfEntryOption.js";
import outputSearchAreaPointOfEntryOptionLoader from "./Output_SearchAreaPointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_Document_PopulateSearchAreaPointOfEntry(){	

	submitPointOfEntry(outputSearchAreaPointOfEntryOption, outputSearchAreaPointOfEntryOptionLoader, "searchAreaPointOfEntryOptionLoader-Id", searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_PopulateSearchAreaPointOfEntry = controller_Document_PopulateSearchAreaPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_Document_PopulateSearchAreaPointOfEntry;
/*Export*/