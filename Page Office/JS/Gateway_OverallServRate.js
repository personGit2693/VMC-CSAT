/*Import*/
import {requestOverallServRate} from "./Request_OverallServRate.js";
/*Import*/


/*Gateway*/
const gatewayOverallServRate = () =>{
	requestOverallServRate();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallServRate = gatewayOverallServRate;
/*Declare global*/