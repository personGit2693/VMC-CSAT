function submitValidationStepOne(){
	if(validatorStepOne() == true){
		nextStep('stepByStepItem-Class', 'headerDynamicSubTxt-Id', 'stepSets-Class');
	}else if(validatorStepOne() == false){
		alert("Please complete the mandatory field");
	}
}