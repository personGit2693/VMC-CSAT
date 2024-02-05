/*Import*/
import {pointOfEntryRating} from "./Elements_Page_RatingMonitoring.js";
import RatingSpan from "./Component_RatingSpan.js";
/*Import*/


/*Render*/
function viewRatingSpan(){
	
	pointOfEntryRating.innerHTML = RatingSpan();
}
/*Render*/


/*Export*/
export default viewRatingSpan;
/*Export*/