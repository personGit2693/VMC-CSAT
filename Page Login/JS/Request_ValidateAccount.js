/*Import*/
import token from "../../Global JS/Token.js";
import {signInBtn, usernInput, passInput} from "./JSCollection_Page_Login.js";
import {requestGetIdentifier, getIdentifier_Obj} from "./Request_GetIdentifier.js";
import {requestCheckCredential, checkCredential_Obj} from "./Request_CheckCredential.js";
import {requestGenerateAccToken, generateAccToken_Obj} from "./Request_GenerateAccToken.js";
import {requestAccountSession, accountSession_Obj} from "./Request_AccountSession.js";
/*Import*/

function requestValidateAccount(){
	signInBtn.disabled = true;
	
	/*Check both username and password*/
	if(usernInput.value == "" && passInput.value == ""){
		alert("Please provide username and password!");
		signInBtn.disabled = false;
		return;
	}
	/*Check both username and password*/

	/*Check username*/
	if(usernInput.value == ""){
		alert("Please provide username");
		signInBtn.disabled = false;
		return;
	}
	/*Check username*/

	/*Check password*/
	if(passInput.value == ""){
		alert("Please provide password");
		signInBtn.disabled = false;
		return;
	}
	/*Check password*/


	/*Get Identifier*/
	requestGetIdentifier();

	if(Object.keys(getIdentifier_Obj).length == 0){
		signInBtn.disabled = false;
		return;		
	}
	/*Get Identifier*/

	/*Check account credential*/
	requestCheckCredential();

	if(Object.keys(checkCredential_Obj).length == 0){
		signInBtn.disabled = false;
		return;		
	}
	/*Check account credential*/

	/*Generate Token*/	
	requestGenerateAccToken();

	if(Object.keys(generateAccToken_Obj).length == 0){
		signInBtn.disabled = false;
		return;		
	}
	/*Generate Token*/

	/*Create account session*/
	requestAccountSession();

	if(Object.keys(accountSession_Obj).length == 0){
		signInBtn.disabled = false;
		return;		
	}
	/*Create account session*/


	alert("Success!");
}

/*Export*/
export {requestValidateAccount};
/*Export*/