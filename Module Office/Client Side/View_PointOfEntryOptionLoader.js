/*Import*/
import {pointOfEntryOptsArea} from "./Elements_Page_RatingMonitoring.js";
import PointOfEntryOptionLoader from "./Component_PointOfEntryOptionLoader.js";
/*Import*/


/*Render*/
function viewPointOfEntryOptionLoader(){

	PointOfEntryOptionLoader().then(component => {
		pointOfEntryOptsArea.insertAdjacentHTML('beforeend', component);
	});
}
/*Render*/


/*Export*/
export default viewPointOfEntryOptionLoader;
/*Export*/