/*Import*/
import {genderPrefRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import GenderPrefRadioBtn from "./Component_GenderPrefRadioBtn.js";
/*Import*/


/*Render*/
function renderGenderPrefRadioBtn(){
	genderPrefRadioBtnsWrap.innerHTML = GenderPrefRadioBtn();
}
/*Render*/


/*Export*/
export default renderGenderPrefRadioBtn;
/*Export*/