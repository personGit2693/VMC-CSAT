/*Import*/
import {requestOffices} from "./Request_Offices.js";
/*Import*/


/*Gateway*/
const gatewayOffices = () =>{
	requestOffices();
}
/*Gateway*/


/*Declare global*/
window.gatewayOffices = gatewayOffices;
/*Declare global*/