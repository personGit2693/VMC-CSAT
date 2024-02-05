/*Import*/
import {searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Office.js";
import {submitPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_Document_SearchPopulatePointOfEntry(){

	submitPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id", searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_SearchPopulatePointOfEntry = controller_Document_SearchPopulatePointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_Document_SearchPopulatePointOfEntry;
/*Export*/