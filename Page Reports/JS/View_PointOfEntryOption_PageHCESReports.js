/*Import*/
import {pointOfEntryOptsArea} from "../../Global JS/JSCollection_Page_Reports.js";
import PointOfEntryOption from "./Component_PointOfEntryOption_PageHCESReports_SearchArea.js";
/*Import*/


/*Render*/
function renderPointOfEntryOption(){
	pointOfEntryOptsArea.innerHTML = PointOfEntryOption();
}
/*Render*/


/*Export*/
export default renderPointOfEntryOption;
/*Export*/