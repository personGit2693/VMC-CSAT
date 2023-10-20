/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Page_Reports.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
/*const functions_Array = [outputPointOfEntryOption];*/

const gatewayPointOfEntry = () =>{
	requestPointOfEntry(searchPointOfEntry.value);
}
/*Gateway*/


/*Declare global*/
window.gatewayPointOfEntry = gatewayPointOfEntry;
/*Declare global*/