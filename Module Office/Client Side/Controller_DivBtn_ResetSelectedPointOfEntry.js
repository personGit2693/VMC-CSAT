/*Import*/
import {resetPointOfEntry_StartIndex, resetSelectedPointOfEntry} from "./Values_Office.js";
import {pointOfEntryOptsWrap} from "./Elements_Page_RatingMonitoring.js";
/*Import*/


/*Controller*/
function controller_DivBtn_ResetSelectedPointOfEntry(){

	resetPointOfEntry_StartIndex();
	resetSelectedPointOfEntry();
	pointOfEntryOptsWrap.scrollTop = 0;
}
/*Controller*/


/*Declare Global*/
window.controller_DivBtn_ResetSelectedPointOfEntry = controller_DivBtn_ResetSelectedPointOfEntry;
/*Declare Global*/


/*Export*/
export default controller_DivBtn_ResetSelectedPointOfEntry;
/*Export*/