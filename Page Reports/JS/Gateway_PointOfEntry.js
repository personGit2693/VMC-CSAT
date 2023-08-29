/*Import*/
import {searchPointOfEntry} from "./JSCollection_Page_DataOne.js";
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