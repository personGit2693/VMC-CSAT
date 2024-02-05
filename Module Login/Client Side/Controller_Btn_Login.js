/*Import*/
import {usernInput, passInput} from "./Elements_Page_Login.js";
import {submitGetIdentifier} from "./SubmitRequest_GetIdentifier.js";
import controller_Btn_CheckCredential from "./Controller_Btn_CheckCredential.js";
/*Import*/


/*Prep variables*/

/*Prep variables*/


/*Controller*/
function controller_Btn_Login(){

	/*Check both username and password*/
	if(usernInput.value == "" && passInput.value == ""){
		
		alert("Please provide username and password!");
		return;
	}
	/*Check both username and password*/

	/*Check username*/
	if(usernInput.value == ""){
		
		alert("Please provide username");
		return;
	}
	/*Check username*/

	/*Check password*/
	if(passInput.value == ""){
		
		alert("Please provide password");
		return;
	}
	/*Check password*/

	submitGetIdentifier(showSpinningLoad, removeSpinningLoad, usernInput.value, controller_Btn_CheckCredential);
}
/*Controller*/


/*Declare Global*/
window.controller_Btn_Login = controller_Btn_Login
/*Declare Global*/


/*Export*/
export default controller_Btn_Login;
/*Export*/