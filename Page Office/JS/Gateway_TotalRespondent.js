/*Import*/
import {requestTotalRespondent} from "./Request_TotalRespondent.js";
/*Import*/


/*Gateway*/
const gatewayTotalRespondent = () =>{
	requestTotalRespondent();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayTotalRespondent = gatewayTotalRespondent;
/*Declare global*/