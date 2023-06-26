/*Import*/
import {freqVisitRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import FreqVisitRadioBtn from "./Component_FreqVisitRadioBtn.js";
/*Import*/


/*Render*/
function renderFreqVisitRadioBtn(){
	freqVisitRadioBtnsWrap.innerHTML = FreqVisitRadioBtn();
}
/*Render*/


/*Export*/
export default renderFreqVisitRadioBtn;
/*Export*/