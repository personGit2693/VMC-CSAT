/*Import*/
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
/*Import*/


/*Gateway*/
const gatewayOverallStronglyAgree = () =>{
	requestOverallStronglyAgree();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallStronglyAgree = gatewayOverallStronglyAgree;
/*Declare global*/