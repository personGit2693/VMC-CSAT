/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Module_Reports.js";
import PointOfEntryOption from "./Component_PointOfEntryOption.js";
/*Import*/


/*Render*/
function viewPointOfEntryOption(){
	
	pointOfEntryOptsArea.innerHTML += PointOfEntryOption();
}
/*Render*/


/*Export*/
export default viewPointOfEntryOption;
/*Export*/