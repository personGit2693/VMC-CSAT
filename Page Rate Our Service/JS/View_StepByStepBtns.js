/*Import*/
import {stepOneBtnsWrap} from "./JsCollection_Page_RateService.js";
import {StepOneBtn} from "./Component_StepByStepBtns.js";
/*Import*/


/*Render*/
function renderStepOneBtn(){
	stepOneBtnsWrap.innerHTML = StepOneBtn();
}
/*Render*/


/*Export*/
export {renderStepOneBtn};
/*Export*/