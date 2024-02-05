/*Import*/
import {usernInput} from "./Elements_Page_Login.js";
import {submitGenerateAccToken} from "./SubmitRequest_GenerateAccToken.js";
import controller_Btn_AccountSession from "./Controller_Btn_AccountSession.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_GenerateAccToken(showSpinningLoad, removeSpinningLoad){

	submitGenerateAccToken(showSpinningLoad, removeSpinningLoad, usernInput.value, controller_Btn_AccountSession);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_GenerateAccToken = controller_Btn_GenerateAccToken
/*Declare Global*/


/*Export*/
export default controller_Btn_GenerateAccToken;
/*Export*/