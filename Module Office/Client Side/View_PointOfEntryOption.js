/*Import*/
import {pointOfEntryOptsArea} from "./Elements_Page_RatingMonitoring.js";
import PointOfEntryOption from "./Component_PointOfEntryOption.js";
/*Import*/


/*Render*/
function viewPointOfEntryOption(){

	PointOfEntryOption().then(component => {
		pointOfEntryOptsArea.innerHTML = component;
	});
}
/*Render*/


/*Export*/
export default viewPointOfEntryOption;
/*Export*/