/*Import*/
import {requestValidateAccount} from "./Request_ValidateAccount.js";
/*Import*/


/*Gateway*/
const gatewayValidateAccount = () =>{
	requestValidateAccount();
}
/*Gateway*/


/*Declare global*/
window.gatewayValidateAccount = gatewayValidateAccount;
/*Declare global*/