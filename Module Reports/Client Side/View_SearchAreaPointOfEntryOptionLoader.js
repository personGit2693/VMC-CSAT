/*Import*/
import {pointOfEntryOptsArea} from "./Elements_Page_CSATReports.js";
import SearchAreaPointOfEntryOptionLoader from "./Component_SearchAreaPointOfEntryOptionLoader.js";
/*Import*/


/*Render*/
function viewSearchAreaPointOfEntryOptionLoader(){
	
	pointOfEntryOptsArea.innerHTML += SearchAreaPointOfEntryOptionLoader();
}
/*Render*/


/*Export*/
export default viewSearchAreaPointOfEntryOptionLoader;
/*Export*/