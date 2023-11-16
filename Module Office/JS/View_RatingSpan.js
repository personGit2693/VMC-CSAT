/*Import*/
import {pointOfEntryRating} from "../../Global JS/JSCollection_Module_Office.js";
import RatingSpan from "./Component_RatingSpan.js";
/*Import*/


/*Render*/
function renderRatingSpan(){
	pointOfEntryRating.innerHTML = RatingSpan();
}
/*Render*/


/*Export*/
export default renderRatingSpan;
/*Export*/