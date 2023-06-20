/*Import*/
import {stepOneBtnsWrap, stepTwoBtnsWrap, stepThreeBtnsWrap, stepFourBtnsWrap} from "./JsCollection_Page_RateService.js";
import {StepOneBtns, StepTwoBtns, StepThreeBtns, StepFourBtns} from "./Component_StepByStepBtns.js";
/*Import*/


/*Render*/
async function renderStepOneBtns(){
	let renderStepOneBtns_Promise = new Promise(function(resolve, reject){
		resolve(StepOneBtns());
	});	

	stepOneBtnsWrap.innerHTML = await renderStepOneBtns_Promise;
}


async function renderStepTwoBtns(){
	let renderStepTwoBtns_Promise = new Promise(function(resolve, reject){
		resolve(StepTwoBtns());
	});	

	stepTwoBtnsWrap.innerHTML = await renderStepTwoBtns_Promise;
}


async function renderStepThreeBtns(){
	let renderStepThreeBtns_Promise = new Promise(function(resolve, reject){
		resolve(StepThreeBtns());
	});	

	stepThreeBtnsWrap.innerHTML = await renderStepThreeBtns_Promise;
}


async function renderStepFourBtns(){
	let renderStepFourBtns_Promise = new Promise(function(resolve, reject){
		resolve(StepFourBtns());
	});	

	stepFourBtnsWrap.innerHTML = await renderStepFourBtns_Promise;
}
/*Render*/


/*Export*/
export {renderStepOneBtns, renderStepTwoBtns, renderStepThreeBtns, renderStepFourBtns};
/*Export*/