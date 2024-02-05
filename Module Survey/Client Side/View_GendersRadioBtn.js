/*Import*/
import {genderRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import GendersRadioBtn from "./Component_GendersRadioBtn.js";
/*Import*/


/*Render*/
function viewGendersRadioBtn(){

	genderRadioBtnsWrap.innerHTML = GendersRadioBtn();
}
/*Render*/


/*Export*/
export default viewGendersRadioBtn;
/*Export*/