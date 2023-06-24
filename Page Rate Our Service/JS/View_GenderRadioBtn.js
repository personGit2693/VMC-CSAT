/*Import*/
import {genderRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import GenderRadioBtn from "./Component_GenderRadioBtn.js";
/*Import*/


/*Render*/
function renderGenderRadioBtn(){
	genderRadioBtnsWrap.innerHTML = GenderRadioBtn();
}
/*Render*/


/*Export*/
export default renderGenderRadioBtn;
/*Export*/