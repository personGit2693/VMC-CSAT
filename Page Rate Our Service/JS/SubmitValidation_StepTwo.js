function submitValidationStepTwo(){
	if(validatorStepTwo() == true){
		nextStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class');
	}else if(validatorStepTwo() == false){
		alert("Please complete the rating for our citizen charter.");
	}
}