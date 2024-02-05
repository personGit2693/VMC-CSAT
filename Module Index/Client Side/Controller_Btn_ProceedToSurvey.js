/*Import*/
import {proceedToRateServ} from "./Values_Index.js";
import {inputCode} from "./Elements_Index.js";
import {submitRequestGenerateRateToken} from "./SubmitRequest_GenerateRateToken.js";
import token from "../../Global Client Side/Token.js";
/*Import*/


/*Controller to proceed to survey page*/
function controller_Btn_ProceedToSurvey(){
	
	if(proceedToRateServ === true){

		submitRequestGenerateRateToken(token, removeSpinningLoad, showSpinningLoad, inputCode.value);

	}else if(proceedToRateServ !== true){

		alert("Please READ and AGREE to Data Privacy first!");
	}	
}
/*Controller to proceed to survey page*/


/*Declare Global*/
window.controller_Btn_ProceedToSurvey = controller_Btn_ProceedToSurvey;
/*Declare Global*/


/*Export*/
export default controller_Btn_ProceedToSurvey;
/*Export*/