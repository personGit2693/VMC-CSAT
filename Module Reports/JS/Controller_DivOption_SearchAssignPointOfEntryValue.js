/*Import*/
import {valueSelectedOfficeObj} from "../../Global JS/Values_Module_Reports.js";
/*Import*/

/*When Point of Entry Option from search was selected*/
function controller_DivOption_SearchAssignPointOfEntryValue(selectedPointOfEntryOpt, selectDropdownHeight){

	displaySelectedOpt(selectedPointOfEntryOpt, selectDropdownHeight);

	valueSelectedOfficeObj();
}
/*When Point of Entry Option from search was selected*/


/*Declare Global*/
window.controller_DivOption_SearchAssignPointOfEntryValue = controller_DivOption_SearchAssignPointOfEntryValue;
/*Declare Global*/


/*Export*/
export default controller_DivOption_SearchAssignPointOfEntryValue;
/*Export*/