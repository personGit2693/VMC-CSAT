/*Import*/
import {valueAgeRange} from "./Values_Survey.js";
/*Import*/


/*Controller*/
function controller_InputText_AssignAge(inputTextValue, inputTextElem){

	if(isNaN(inputTextValue) == true){

		alert("Please number only in age");

		inputTextElem.value = "";
		
	}else if(isNaN(inputTextValue) == false){

		valueAgeRange(inputTextValue);
	}	
}
/*Controller*/


/*Declare Global*/
window.controller_InputText_AssignAge = controller_InputText_AssignAge;
/*Declare Global*/


/*Export*/
export default controller_InputText_AssignAge;
/*Export*/