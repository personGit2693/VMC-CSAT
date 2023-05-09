/*Function to lighten per step*/
const nextStep = () =>{
	if(stepNumIndex < stepByStepItem.length){
		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		lining.classList.add("stepByStepLineLight-Class");
		numbering.classList.add("stepNumberLight-Class");
		definition.classList.add("stepDefiLight-Class");

		stepNumIndex++;
	}
}
/*Function to lighten per step*/


/*Function to back step*/
const backStep = () =>{
	if(stepNumIndex >= 0){
		if(stepNumIndex != 0){
			stepNumIndex--;
		}

		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		if(stepNumIndex > 0){
			lining.classList.remove("stepByStepLineLight-Class");						
		}

		numbering.classList.remove("stepNumberLight-Class");
		definition.classList.remove("stepDefiLight-Class");		
	}
}
/*Function to back step*/