/*Import*/
import {valueResetSearchPointOfEntry} from "../../Global JS/Values_Module_Reports.js";
import {submitRequestPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
/*Import*/


/*When searching for point of entry*/
function controller_InputText_SearchFindPointOfEntry(){
	
	valueResetSearchPointOfEntry();

	submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");	
}
/*When searching for point of entry*/


/*Declare Global*/
window.controller_InputText_SearchFindPointOfEntry = controller_InputText_SearchFindPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_InputText_SearchFindPointOfEntry;
/*Export*/