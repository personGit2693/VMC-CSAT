/*Import*/
import {newPointOfEntry, officeId} from "../Global JS/JSCollection_Page_IMISS.js";
import {requestUpdatePointOfEntry} from "./Request_UpdatePointOfEntry.js";
/*Import*/


/*Gateway*/
const gatewayUpdatePointOfEntry = () =>{
	requestUpdatePointOfEntry(newPointOfEntry, officeId);
}
/*Gateway*/


/*Declare global*/
window.gatewayUpdatePointOfEntry = gatewayUpdatePointOfEntry;
/*Declare global*/