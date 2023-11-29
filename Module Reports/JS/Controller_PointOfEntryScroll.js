/*Import*/
import {valuePointOfEntryOptStartIndex} from "../../Global JS/Values_Module_Reports.js";
/*Import*/


/*When scrolling for point of entry*/
function controllerPointOfEntryScroll(pointOfEntryOptsWrap_Param){
	
	if((pointOfEntryOptsWrap_Param.scrollTop + pointOfEntryOptsWrap_Param.offsetHeight) >= pointOfEntryOptsWrap_Param.scrollHeight){

		valuePointOfEntryOptStartIndex();

		submitRequestPointOfEntry(outputPointOfEntryOption, outputPointOfEntryOptionLoader, "pointOfEntryOptionLoader-Id");			
	}
}
/*When scrolling for point of entry*/


/*Declare Global*/
window.controllerPointOfEntryScroll = controllerPointOfEntryScroll;
/*Declare Global*/