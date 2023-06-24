/*Import*/
import {requestServiceTypes} from "./Request_ServiceTypes.js";
/*Import*/


/*Prep export variables*/
var officeId = null;
/*Prep export variables*/


/*Gateway*/
const gatewayServiceTypes = (selectedOffice_Id) =>{
	officeId = selectedOffice_Id;

	requestServiceTypes();
}
/*Gateway*/


/*Declare global*/
window.gatewayServiceTypes = gatewayServiceTypes;
/*Declare global*/


/*Export*/
export {officeId};
/*Export*/