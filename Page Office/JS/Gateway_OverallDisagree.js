/*Import*/
import {requestOverallDisagree} from "./Request_OverallDisagree.js";
/*Import*/


/*Gateway*/
const gatewayOverallDisagree = () =>{
	requestOverallDisagree();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallDisagree = gatewayOverallDisagree;
/*Declare global*/