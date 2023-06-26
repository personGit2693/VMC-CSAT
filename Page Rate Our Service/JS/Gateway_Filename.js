/*Import*/
import {requestFunction} from "./Request_Filename.js";
/*Import*/


/*Gateway*/
const gatewayFunction = () =>{
	requestFunction();
}
/*Gateway*/


/*Declare global*/
window.gatewayFunction = gatewayFunction;
/*Declare global*/