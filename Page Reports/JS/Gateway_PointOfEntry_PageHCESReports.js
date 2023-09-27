/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Page_Reports.js";
import renderPointOfEntryOption from "./View_PointOfEntryOption_PageHCESReports.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
const functions_Array = [renderPointOfEntryOption];

const gatewayPointOfEntry = () =>{
	requestPointOfEntry(searchPointOfEntry.value, functions_Array);
}
/*Gateway*/


/*Declare global*/
window.gatewayPointOfEntry = gatewayPointOfEntry;
/*Declare global*/