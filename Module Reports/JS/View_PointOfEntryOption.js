/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Module_Reports.js";
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