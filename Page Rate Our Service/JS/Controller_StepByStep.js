/*Prep vars*/
var stepNumIndex = 0;
/*Prep vars*/


/*Function to lighten per step*/
const nextStep = (stepByStepItem_ClassName, headerDynamicSubTxt_IdName, stepSets_Classname) =>{
	const stepByStepItem = document.getElementsByClassName(stepByStepItem_ClassName);
	const headerDynamicSubTxt = document.getElementById(headerDynamicSubTxt_IdName);
	const stepSets = document.getElementsByClassName(stepSets_Classname);

	if(stepNumIndex < stepByStepItem.length){

		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		lining.classList.add("stepByStepLineLight-Class");
		numbering.classList.add("stepNumberLight-Class");
		definition.classList.add("stepDefiLight-Class");


		/*Editable*/
		/*_Change sub header text per step*/
		if(stepNumIndex === 0){
			headerDynamicSubTxt.innerText = "This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.";			
		}else if(stepNumIndex === 1){
			headerDynamicSubTxt.innerText = "The Citizen’s Charter is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times among others.";
		}else if(stepNumIndex === 2){
			headerDynamicSubTxt.innerText = "Rate Valenzuela Medical Center's Staffs and Facilities that best corresponds to your rating for each item.";
		}else if(stepNumIndex === 3){
			headerDynamicSubTxt.innerText = "Your suggestions, comments and commendations are matter to us.";
		}
		/*_Change sub header text per step*/

		/*_Display respective form in accordance to number of step*/
		for(let index=0; index < stepSets.length; index++){
			if(index === stepNumIndex){
				stepSets[index].style.display = "block";
			}else if(index !== stepNumIndex){
				stepSets[index].style.display = "none";
			}
		}
		/*_Display respective form in accordance to number of step*/
		/*Editable*/


		stepNumIndex++;

		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;		
	}
}
/*Function to lighten per step*/


/*Function to back step*/
const backStep =  (stepByStepItem_ClassName, headerDynamicSubTxt_IdName, stepSets_Classname) =>{
	const stepByStepItem = document.getElementsByClassName(stepByStepItem_ClassName);
	const headerDynamicSubTxt = document.getElementById(headerDynamicSubTxt_IdName);
	const stepSets = document.getElementsByClassName(stepSets_Classname);

	if(stepNumIndex > 1){		

		stepNumIndex--;

		let lining = stepByStepItem[stepNumIndex].children[0];
		let numbering = stepByStepItem[stepNumIndex].children[1];
		let definition = stepByStepItem[stepNumIndex].children[2];

		lining.classList.remove("stepByStepLineLight-Class");
		numbering.classList.remove("stepNumberLight-Class");
		definition.classList.remove("stepDefiLight-Class");


		/*Editable*/
		/*_Change sub header text per step*/
		if(stepNumIndex === 1){
			headerDynamicSubTxt.innerText = "This survey will serve as a basis to help us to improve our services for you to have a better experience in the facility because you are important to us. Any comments or suggestions you provide through this survey will be highly-appreciated and will be treated with utmost confidentiality.";
		}else if(stepNumIndex === 2){
			headerDynamicSubTxt.innerText = "The Citizen’s Charter is an official document that reflects the services of a government agency/office including its requirements, fees, and processing times among others.";
		}else if(stepNumIndex === 3){
			headerDynamicSubTxt.innerText = "Rate Valenzuela Medical Center's Staffs and Facilities that best corresponds to your rating for each item.";
		}
		/*_Change sub header text per step*/


		/*_Display respective form in accordance to number of step*/
		for(let index=0; index < stepSets.length; index++){
			if(index === stepNumIndex){
				stepSets[index].style.display = "none";
			}else if(index === stepNumIndex - 1){
				stepSets[index].style.display = "block";
			}
		}
		/*_Display respective form in accordance to number of step*/
		/*Editable*/
		

		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;				
	}
}
/*Function to back step*/