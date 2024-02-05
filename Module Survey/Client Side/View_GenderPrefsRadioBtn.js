/*Import*/
import {genderPrefRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import GenderPrefsRadioBtn from "./Component_GenderPrefsRadioBtn.js";
/*Import*/


/*Render*/
function viewGenderPrefsRadioBtn(){

	genderPrefRadioBtnsWrap.innerHTML = GenderPrefsRadioBtn();
}
/*Render*/


/*Export*/
export default viewGenderPrefsRadioBtn;
/*Export*/