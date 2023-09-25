/*Import*/
import {inputCode} from "./JSCollection_IndexModule.js";
import {requestValidateCode, validCode, requestValidateCode_Obj} from "./Request_ValidateCode.js";
/*Import*/


/*Validate code*/
const checkInputCode = (buttonElemUsed) =>{

	if(inputCode.value != ""){
		showSpinningLoad();
		requestValidateCode(buttonElemUsed);
		removeSpinningLoad();

		if(requestValidateCode_Obj.execution != true){
			notifyNodeBox(false, "Validating code has execution problem!", "notiEnterCodeModal-Id");
		}else if(requestValidateCode_Obj.count == 0){
			notifyNodeBox(false, "Invalid code", "notiEnterCodeModal-Id");
		}else if(requestValidateCode_Obj.execution == true && requestValidateCode_Obj.count != 0 && validCode == true){
			notifyNodeBox(true, "Please proceed", "notiEnterCodeModal-Id");	
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