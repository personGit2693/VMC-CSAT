/*Import*/
import {genderPrefRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import GenderPrefsRadioBtnLoader from "./Component_GenderPrefsRadioBtnLoader.js";
/*Import*/


/*Render*/
function viewGenderPrefsRadioBtnLoader(){

	genderPrefRadioBtnsWrap.innerHTML = GenderPrefsRadioBtnLoader();
}
/*Render*/


/*Export*/
export default viewGenderPrefsRadioBtnLoader;
/*Export*/