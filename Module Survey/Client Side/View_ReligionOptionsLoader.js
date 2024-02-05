/*Import*/
import {rDropdownReligionsOptionsWrap} from "./Elements_Page_RateServey.js";
import ReligionOptionsLoader from "./Component_ReligionOptionsLoader.js";
/*Import*/


/*Render*/
function viewReligionOptionsLoader(){

	rDropdownReligionsOptionsWrap.innerHTML = ReligionOptionsLoader();
}
/*Render*/


/*Export*/
export default viewReligionOptionsLoader;
/*Export*/