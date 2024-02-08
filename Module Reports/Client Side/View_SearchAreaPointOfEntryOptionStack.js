/*Import*/
import {pointOfEntryOptsArea} from "./Elements_Page_CSATReports.js";
import SearchAreaPointOfEntryOptionStack from "./Component_SearchAreaPointOfEntryOptionStack.js";
/*Import*/


/*Render*/
function viewSearchAreaPointOfEntryOptionStack(){
	
	pointOfEntryOptsArea.innerHTML += SearchAreaPointOfEntryOptionStack();
}
/*Render*/


/*Export*/
export default viewSearchAreaPointOfEntryOptionStack;
/*Export*/