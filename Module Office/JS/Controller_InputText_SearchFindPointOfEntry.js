/*Import*/
import {valueResetSearchPointOfEntryOption} from "../../Global JS/Values_Module_Office.js";
import {submitRequestPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
import outputPointOfEntryOption from "./Output_PointOfEntryOption.js";
import outputPointOfEntryOptionLoader from "./Output_PointOfEntryOptionLoader.js";
/*Import*/


/*Controller for invoking valueResetSearchPointOfEntryOption and submitRequestPointOfEntry*/
function controller_InputText_SearchFindPointOfEntry(){

	valueResetSearchPointOfEntryOption();
	submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");	
}
/*Controller for invoking valueResetSearchPointOfEntryOption and submitRequestPointOfEntry*/


/*Declare Global*/
window.controller_InputText_SearchFindPointOfEntry = controller_InputText_SearchFindPointOfEntry
/*Declare Global*/


/*Export*/
export default controller_InputText_SearchFindPointOfEntry;
/*Export*/