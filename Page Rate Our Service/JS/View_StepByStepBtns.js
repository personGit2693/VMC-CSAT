/*Import*/
import {stepOneBtnsWrap, stepTwoBtnsWrap, stepThreeBtnsWrap, stepFourBtnsWrap} from "./JsCollection_Page_RateService.js";
import {StepOneBtns, StepTwoBtns, StepThreeBtns, StepFourBtns} from "./Component_StepByStepBtns.js";
/*Import*/


/*Render*/
function renderStepOneBtns(){
	stepOneBtnsWrap.innerHTML = StepOneBtns();
}


function renderStepTwoBtns(){
	stepTwoBtnsWrap.innerHTML = StepTwoBtns();
}


function renderStepThreeBtns(){	
	stepThreeBtnsWrap.innerHTML = StepThreeBtns();
}


function renderStepFourBtns(){
	stepFourBtnsWrap.innerHTML = StepFourBtns();
}
/*Render*/


/*Export*/
export {renderStepOneBtns, renderStepTwoBtns, renderStepThreeBtns, renderStepFourBtns};
/*Export*/