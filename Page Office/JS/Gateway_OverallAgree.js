/*Import*/
import {requestOverallAgree} from "./Request_OverallAgree.js";
/*Import*/


/*Gateway*/
const gatewayOverallAgree = () =>{
	requestOverallAgree();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallAgree = gatewayOverallAgree;
/*Declare global*/