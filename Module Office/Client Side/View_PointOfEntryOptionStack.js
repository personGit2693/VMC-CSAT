/*Import*/
import {pointOfEntryOptsArea} from "./Elements_Page_RatingMonitoring.js";
import PointOfEntryOptionStack from "./Component_PointOfEntryOptionStack.js";
/*Import*/


/*Render*/
function viewPointOfEntryOptionStack(){

	PointOfEntryOptionStack().then(component => {
		pointOfEntryOptsArea.insertAdjacentHTML('beforeend', component);
	});
}
/*Render*/


/*Export*/
export default viewPointOfEntryOptionStack;
/*Export*/