/*Import*/
import {respondentTypeWrap} from "./JsCollection_Page_RateService.js";
import RespondentTypeRadioBtn from "./Component_RespondentTypeRadioBtn.js";
/*Import*/


/*Render*/
function renderRespondentTypeRadioBtn(){
	respondentTypeWrap.innerHTML = RespondentTypeRadioBtn();
}
/*Render*/


/*Export*/
export default renderRespondentTypeRadioBtn;
/*Export*/