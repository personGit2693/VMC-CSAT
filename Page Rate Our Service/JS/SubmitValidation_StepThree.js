function submitValidationStepThree(){
	if(validatorStepThree() == true){
		nextStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class');
	}else if(validatorStepThree() == false){
		alert("Please rate at least one question per group.");
	}
}