/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Module_Reports.js";
import PointOfEntryOptionLoader from "./Component_PointOfEntryOptionLoader.js";
/*Import*/


/*Render*/
function viewPointOfEntryOptionLoader(){
	
	pointOfEntryOptsArea.innerHTML += PointOfEntryOptionLoader();
}
/*Render*/


/*Export*/
export default viewPointOfEntryOptionLoader;
/*Export*/