/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Page_Reports.js";
import renderPointOfEntryOption from "./View_PointOfEntryOption.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
const gatewayPointOfEntry = () =>{
	requestPointOfEntry(searchPointOfEntry, renderPointOfEntryOption);
}
/*Gateway*/


/*Declare global*/
window.gatewayPointOfEntry = gatewayPointOfEntry;
/*Declare global*/