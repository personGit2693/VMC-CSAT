/*Import*/
import {searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Office.js";
import {submitPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_Doc_SearchPopulatePointOfEntry(){

	submitPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id", searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display);
}
/*Controller*/


/*Declare Global*/
window.controller_Doc_SearchPopulatePointOfEntry = controller_Doc_SearchPopulatePointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_Doc_SearchPopulatePointOfEntry;
/*Export*/