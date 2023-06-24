/*Import*/
import {requestOffices} from "./Request_Offices.js";
/*Import*/


/*Prep export variables*/
var floorId = null;
/*Prep export variables*/


/*Gateway*/
const gatewayOffices = (selectedFloor_Id) =>{
	floorId = selectedFloor_Id;

	requestOffices();
}
/*Gateway*/


/*Declare global*/
window.gatewayOffices = gatewayOffices;
/*Declare global*/


/*Export*/
export {floorId};
/*Export*/