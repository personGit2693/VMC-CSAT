/*Import*/
import {inputCode} from "./JSCollection_IndexModule.js";
import {requestValidateCode, validCode} from "./Request_ValidateCode.js";
/*Import*/


/*Validate code*/
const checkInputCode = () =>{

	if(inputCode.value != ""){
		showSpinningLoad();
		requestValidateCode();
		removeSpinningLoad();

		if(validCode == true){
			showRateOurServiceBtn();
		}
	}else if(inputCode.value == ""){
		notifyNodeBox(false, "Please provide the code", "notiEnterCodeModal-Id");		
	}
}


function checkInputCodeEnter(e){

	if(e.key == "Enter"){
		checkInputCode();
	}	
}
/*Validate code*/


/*Declaire global*/
window.checkInputCode = checkInputCode;
window.checkInputCodeEnter = checkInputCodeEnter;
/*Declaire global*/