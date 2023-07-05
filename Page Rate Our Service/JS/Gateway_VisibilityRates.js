/*Import*/
import {requestVisibilityRates} from "./Request_VisibilityRates.js";
/*Import*/


/*Gateway*/
const gatewayVisibilityRates = () =>{
	requestVisibilityRates();
}
/*Gateway*/


/*Declare global*/
window.gatewayVisibilityRates = gatewayVisibilityRates;
/*Declare global*/