/*Import*/
import {genderRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import GendersRadioBtnLoader from "./Component_GendersRadioBtnLoader.js";
/*Import*/


/*Render*/
function viewGendersRadioBtnLoader(){

	genderRadioBtnsWrap.innerHTML = GendersRadioBtnLoader();
}
/*Render*/


/*Export*/
export default viewGendersRadioBtnLoader;
/*Export*/