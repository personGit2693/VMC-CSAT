/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Page_Dashboard.js";
import PointOfEntryOption from "./Component_PointOfEntryOption.js";
/*Import*/


/*Render*/
function renderPointOfEntryOption(){
	pointOfEntryOptsArea.innerHTML = PointOfEntryOption();
}
/*Render*/


/*Export*/
export default renderPointOfEntryOption;
/*Export*/