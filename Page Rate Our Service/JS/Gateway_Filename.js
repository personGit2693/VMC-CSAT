/*Import*/
import {requestFunction} from "./Request_Filename.js";
/*Import*/


/*Prep export variables*/
var gatewayVariable = "I'm gateway variable";
/*Prep export variables*/


/*Gateway*/
const gatewayFunction = () =>{
	requestFunction();
}
/*Gateway*/


/*Declare global*/
window.gatewayFunction = gatewayFunction;
/*Declare global*/


/*Export*/
export {gatewayVariable};
/*Export*/