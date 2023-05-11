/*Function to lighten per step*/
const nextStep = () =>{
	if(stepNumIndex < stepByStepItem.length){
		++stepNum;

		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		lining.classList.add("stepByStepLineLight-Class");
		numbering.classList.add("stepNumberLight-Class");
		definition.classList.add("stepDefiLight-Class");


		/*Editable*/
		if(stepNum === 1){
			headerDynamicSubTxt.innerText = "This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.";
		}else if(stepNum === 2){
			headerDynamicSubTxt.innerText = "The Citizen’s Charter is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times among others.";
		}else if(stepNum === 3){
			headerDynamicSubTxt.innerText = "Rate Valenzuela Medical Center's Staffs and Facilities that best corresponds to your rating for each item.";
		}else if(stepNum === 4){
			headerDynamicSubTxt.innerText = "Your suggestions, comments and commendations are matter to us.";
		}
		/*Editable*/


		stepNumIndex++;		
	}
}
/*Function to lighten per step*/


/*Function to back step*/
const backStep = () =>{
	if(stepNumIndex >= 1){
		
		if(stepNumIndex > 1){
			stepNumIndex--;
			--stepNum;
		}

		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		lining.classList.remove("stepByStepLineLight-Class");
		numbering.classList.remove("stepNumberLight-Class");
		definition.classList.remove("stepDefiLight-Class");


		/*Editable*/
		if(stepNum === 1){
			headerDynamicSubTxt.innerText = "This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.";
		}else if(stepNum === 2){
			headerDynamicSubTxt.innerText = "The Citizen’s Charter is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times among others.";
		}else if(stepNum === 3){
			headerDynamicSubTxt.innerText = "Rate Valenzuela Medical Center's Staffs and Facilities that best corresponds to your rating for each item.";
		}else if(stepNum === 4){
			headerDynamicSubTxt.innerText = "Your suggestions, comments and commendations are matter to us.";
		}
		/*Editable*/		
	}
}
/*Function to back step*/

createCusDropOptWoRogrid(dropdownReligion);