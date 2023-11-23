/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Module_Office.js";
import PointOfEntryOptionLoader from "./Component_PointOfEntryOptionLoader.js";
/*Import*/


/*Render*/
function renderPointOfEntryOptionLoader(){

	pointOfEntryOptsArea.innerHTML += PointOfEntryOptionLoader();
}
/*Render*/


/*Export*/
export default renderPointOfEntryOptionLoader;
/*Export*/