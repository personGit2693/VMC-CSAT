/*Components*/
function StepOneBtns(){
	let stepOneBtns = `<button class="normButton_RoClass proceedBtn-Class" id="nextStepOneBtn-Id" onclick="submitValidationStepOne()">`+
		`Proceed`+
	`</button>`;

	return stepOneBtns;
}

function StepTwoBtns(){
	let stepTwoBtns = `<button class="normButton_RoClass proceedBtn-Class" id="nextStepTwoBtn-Id" onclick="nextStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class')">`+
		`Proceed`+
	`</button>`+
	`<button class="normButton_RoClass backBtn-Class" id="backStepTwoBtn-Id" onclick="backStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class')">`+
		`Back`+
	`</button>`;

	return stepTwoBtns;
}

function StepThreeBtns(){
	let stepThreeBtns = `<button class="normButton_RoClass proceedBtn-Class" id="nextStepThreeBtn-Id" onclick="nextStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class')">`+
		`Proceed`+
	`</button>`+
	`<button class="normButton_RoClass backBtn-Class" id="backStepThreeBtn-Id" onclick="backStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class')">`+
		`Back`+
	`</button>`;

	return stepThreeBtns;
}

function StepFourBtns(){
	let stepFourBtns = `<button class="normButton_RoClass proceedBtn-Class" id="submitScoreBtn-Id">`+
		`Submit Rating`+
	`</button>`+
	`<button class="normButton_RoClass backBtn-Class" id="backStepFourBtn-Id" onclick="backStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class')">`+
		`Back`+
	`</button>`;

	return stepFourBtns;
}
/*Components*/


/*Export*/
export {StepOneBtns, StepTwoBtns, StepThreeBtns, StepFourBtns};
/*Export*/