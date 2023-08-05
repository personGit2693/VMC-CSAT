/*Import*/
import {requestOverallNeither} from "./Request_OverallNeither.js";
/*Import*/


/*Gateway*/
const gatewayOverallNeither = () =>{
	requestOverallNeither();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallNeither = gatewayOverallNeither;
/*Declare global*/