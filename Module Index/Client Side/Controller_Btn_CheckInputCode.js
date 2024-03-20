/*Import*/
import {inputCode} from "./Elements_Index.js";
import controller_Document_ShowRateOurServiceBtn from "./Controller_Document_ShowRateOurServBtn.js";
import {submitRequestValidateCode} from "./SubmitRequest_ValidateCode.js";
/*Import*/


/*Controller for invoking submitRequestValidateCode*/
function controller_Btn_CheckInputCode(){

	submitRequestValidateCode(inputCode.value, controller_Document_ShowRateOurServiceBtn, notifyNodeBox);	
}
/*Controller for invoking submitRequestValidateCode*/


/*Declare Global*/
window.controller_Btn_CheckInputCode = controller_Btn_CheckInputCode;
/*Declare Global*/


/*Export*/
export default controller_Btn_CheckInputCode;
/*Export*/