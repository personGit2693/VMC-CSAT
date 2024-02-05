/*Import*/
import {rDropdownReligionsOptionsWrap} from "./Elements_Page_RateServey.js";
import ReligionsOptions from "./Component_ReligionOptions.js";
/*Import*/


/*Render*/
function viewReligionOptions(){

	rDropdownReligionsOptionsWrap.innerHTML = ReligionsOptions();
}
/*Render*/


/*Export*/
export default viewReligionOptions;
/*Export*/