/*Import*/
import {resetPointOfEntry_StartIndex, searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display, valueSearchPointOfEntry} from "./Values_Office.js";
import {submitPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_InputText_SearchFindPointOfEntry(searchPointOfEntryValue){

	resetPointOfEntry_StartIndex();

	valueSearchPointOfEntry(searchPointOfEntryValue);

	submitPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id", searchPointOfEntry_Value, pointOfEntry_StartIndex, pointOfEntry_Display);
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_SearchFindPointOfEntry = controller_InputText_SearchFindPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_InputText_SearchFindPointOfEntry;
/*Export*/