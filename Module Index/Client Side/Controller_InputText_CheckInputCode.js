/*Import*/
import {inputCode} from "./Elements_Index.js";
import controller_Btn_ShowRateOurServiceBtn from "./Controller_Btn_ShowRateOurServBtn.js";
import {submitRequestValidateCode} from "./SubmitRequest_ValidateCode.js";
/*Import*/


/*Controller for invoking submitRequestValidateCode*/
function controller_InputText_CheckInputCode(e){

	if(e.key == "Enter"){

		submitRequestValidateCode(inputCode.value, controller_Btn_ShowRateOurServiceBtn, notifyNodeBox);	
	}
}
/*Controller for invoking submitRequestValidateCode*/


/*Declare Global*/
window.controller_InputText_CheckInputCode = controller_InputText_CheckInputCode;
/*Declare Global*/


/*Export*/
export default controller_InputText_CheckInputCode;
/*Export*/