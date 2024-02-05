/*Import*/
import {checkboxFilterInternal, checkboxFilterExternal} from "./Elements_Page_RatingMonitoring.js";
/*Import*/


/*Controller*/
function controller_Document_AssignDefaultFilterClientTypes(){

	checkboxFilterInternal.checked = true;
	checkboxFilterExternal.checked = true;
	checkCusCheckBox(checkboxFilterInternal);
	checkCusCheckBox(checkboxFilterExternal);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_AssignDefaultFilterClientTypes = controller_Document_AssignDefaultFilterClientTypes;
/*Declare Global*/


/*Export*/
export default controller_Document_AssignDefaultFilterClientTypes;
/*Export*/