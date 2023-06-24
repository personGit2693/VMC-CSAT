/*Import*/
import {dropdownReligionCon} from "./JsCollection_Page_RateService.js";
import ReligionDropdownMenu from "./Component_ReligionDropdownMenu.js";
/*Import*/


/*Render*/
function renderReligionDropdownMenu(){
	dropdownReligionCon.innerHTML = ReligionDropdownMenu();
}
/*Render*/


/*Export*/
export default renderReligionDropdownMenu;
/*Export*/