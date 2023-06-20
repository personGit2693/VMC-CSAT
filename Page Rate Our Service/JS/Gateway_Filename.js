/*Import*/
import {requestFunction} from "./Request_Filename.js";
/*Import*/

const gatewayFunction = () =>{
	requestFunction();
}

window.gatewayFunction = gatewayFunction;