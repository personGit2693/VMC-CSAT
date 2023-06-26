/*Import*/
import {requestServiceTypes} from "./Request_ServiceTypes.js";
/*Import*/


/*Gateway*/
const gatewayServiceTypes = () =>{
	requestServiceTypes();
}
/*Gateway*/


/*Declare global*/
window.gatewayServiceTypes = gatewayServiceTypes;
/*Declare global*/