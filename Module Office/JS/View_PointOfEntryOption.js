/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Module_Office.js";
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