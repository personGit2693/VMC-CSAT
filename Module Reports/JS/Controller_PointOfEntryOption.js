/*Import*/
import {valueSelectedOfficeObj} from "../../Global JS/Values_Module_Reports.js";
/*Import*/

/*When Point of Entry Option from search was selected*/
function controllerPointOfEntryOption(selectedPointOfEntryOpt, selectDropdownHeight){

	displaySelectedOpt(selectedPointOfEntryOpt, selectDropdownHeight);

	valueSelectedOfficeObj();
}
/*When Point of Entry Option from search was selected*/


/*Declare Global*/
window.controllerPointOfEntryOption = controllerPointOfEntryOption;
/*Declare Global*/