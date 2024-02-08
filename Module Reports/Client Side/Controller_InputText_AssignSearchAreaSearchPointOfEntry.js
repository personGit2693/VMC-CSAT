/*Import*/
import {valueSearchAreaSearchPointOfEntry, resetSearchAreaPointOfEntryStartIndex, searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display} from "./Values_Reports.js";
import {pointOfEntryOptsArea} from "./Elements_Page_CSATReports.js";
import {submitPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputSearchAreaPointOfEntryOption from "./Output_SearchAreaPointOfEntryOption.js";
import outputSearchAreaPointOfEntryOptionLoader from "./Output_SearchAreaPointOfEntryOptionLoader.js";
/*Import*/


/*Controller*/
function controller_InputText_AssignSearchAreaSearchPointOfEntry(searchPointOfEntry_Param){

	resetSearchAreaPointOfEntryStartIndex();

	pointOfEntryOptsArea.innerHTML = "";

	valueSearchAreaSearchPointOfEntry(searchPointOfEntry_Param);

	submitPointOfEntry(outputSearchAreaPointOfEntryOption, outputSearchAreaPointOfEntryOptionLoader, "searchAreaPointOfEntryOptionLoader-Id", searchArea_SearchPointOfEntry, pointOfEntry_StartIndex, pointOfEntry_Display);
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_AssignSearchAreaSearchPointOfEntry = controller_InputText_AssignSearchAreaSearchPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_InputText_AssignSearchAreaSearchPointOfEntry;
/*Export*/