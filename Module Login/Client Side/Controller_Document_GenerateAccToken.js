/*Import*/
import {usernInput} from "./Elements_Page_Login.js";
import {submitGenerateAccToken} from "./SubmitRequest_GenerateAccToken.js";
import controller_Document_AccountSession from "./Controller_Document_AccountSession.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Document_GenerateAccToken(showSpinningLoad, removeSpinningLoad){

	submitGenerateAccToken(showSpinningLoad, removeSpinningLoad, usernInput.value, controller_Document_AccountSession);
}
/*Controller*/


/*Declare Global*/
window.controller_Document_GenerateAccToken = controller_Document_GenerateAccToken
/*Declare Global*/


/*Export*/
export default controller_Document_GenerateAccToken;
/*Export*/