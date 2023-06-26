/*Import*/
import {requestOfficeServices} from "./Request_OfficeServices.js";
/*Import*/


/*Gateway*/
const gatewayOfficeServices = () =>{
	requestOfficeServices();
}
/*Gateway*/


/*Declare global*/
window.gatewayOfficeServices = gatewayOfficeServices;
/*Declare global*/