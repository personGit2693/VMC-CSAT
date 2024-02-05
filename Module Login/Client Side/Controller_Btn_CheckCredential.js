/*Import*/
import {usernInput, passInput} from "./Elements_Page_Login.js";
import {submitCheckCredential} from "./SubmitRequest_CheckCredential.js";
import controller_Btn_GenerateAccToken from "./Controller_Btn_GenerateAccToken.js";
import {accountDetails_Obj} from "./Request_GetIdentifier.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_CheckCredential(showSpinningLoad, removeSpinningLoad){

	submitCheckCredential(showSpinningLoad, removeSpinningLoad, usernInput.value, passInput.value, accountDetails_Obj.account_identifier, controller_Btn_GenerateAccToken);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_CheckCredential = controller_Btn_CheckCredential
/*Declare Global*/


/*Export*/
export default controller_Btn_CheckCredential;
/*Export*/