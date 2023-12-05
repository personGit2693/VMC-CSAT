/*Import*/
import {pointOfEntryRating} from "../../Global JS/JSCollection_Module_Office.js";
import RatingSpanLoader from "./Component_RatingSpanLoader.js";
/*Import*/


/*Render*/
function viewRatingSpanLoader(){

	pointOfEntryRating.innerHTML = RatingSpanLoader();
}
/*Render*/


/*Export*/
export default viewRatingSpanLoader;
/*Export*/