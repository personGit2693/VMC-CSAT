/*Import*/
import {valuePointOfEntryOptStartIndex} from "../../Global JS/Values_Module_Reports.js";
import {submitRequestPointOfEntry} from "./SubmitRequest_PointOfEntry.js";
/*Import*/


/*When scrolling for point of entry*/
function controller_DivOptionsWrap_SearchFindPointOfEntry(pointOfEntryOptsWrap_Param){
	
	if((pointOfEntryOptsWrap_Param.scrollTop + pointOfEntryOptsWrap_Param.offsetHeight) >= pointOfEntryOptsWrap_Param.scrollHeight){

		valuePointOfEntryOptStartIndex();

		submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");			
	}
}
/*When scrolling for point of entry*/


/*Declare Global*/
window.controller_DivOptionsWrap_SearchFindPointOfEntry = controller_DivOptionsWrap_SearchFindPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_DivOptionsWrap_SearchFindPointOfEntry;
/*Export*/