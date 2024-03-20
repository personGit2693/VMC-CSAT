/*Import*/
import {usernInput, passInput} from "./Elements_Page_Login.js";
import {submitCheckCredential} from "./SubmitRequest_CheckCredential.js";
import controller_Document_GenerateAccToken from "./Controller_Document_GenerateAccToken.js";
import {accountDetails_Obj} from "./Request_GetIdentifier.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Document_CheckCredential(showSpinningLoad, removeSpinningLoad){

	submitCheckCredential(showSpinningLoad, removeSpinningLoad, usernInput.value, passInput.value, accountDetails_Obj.account_identifier, controller_Document_GenerateAccToken);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_CheckCredential = controller_Document_CheckCredential
/*Declare Global*/


/*Export*/
export default controller_Document_CheckCredential;
/*Export*/