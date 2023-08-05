/*Import*/
import {requestOverallStronglyDisagree} from "./Request_OverallStronglyDisagree.js";
/*Import*/


/*Gateway*/
const gatewayOverallStronglyDisagree = () =>{
	requestOverallStronglyDisagree();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallStronglyDisagree = gatewayOverallStronglyDisagree;
/*Declare global*/