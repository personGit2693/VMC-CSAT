/*Import*/
import {freqVisitRadioBtnsWrap} from "./Elements_Page_RateServey.js";
import FreqVisitsRadioBtn from "./Component_FreqVisitsRadioBtn.js";
/*Import*/


/*Render*/
function viewFreqVisitsRadioBtn(){

	freqVisitRadioBtnsWrap.innerHTML = FreqVisitsRadioBtn();
}
/*Render*/


/*Export*/
export default viewFreqVisitsRadioBtn;
/*Export*/