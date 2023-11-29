/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Module_Reports.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
import {searchPointOfEntryStartIndex, searchPointOfEntryDisplay} from "../../Global JS/Values_Module_Reports.js";
/*Import*/


/*Gateway*/
async function gatewayPointOfEntry(){

	const gatewayPromise = new Promise(function(resolve){		

		requestPointOfEntry(searchPointOfEntry.value, searchPointOfEntryStartIndex, searchPointOfEntryDisplay)
		.then((requestPromise) => {

			if(requestPromise === true){

				resolve(true);
			}
		});
	});

	return await gatewayPromise;
}
/*Gateway*/


/*Declare global*/
window.gatewayPointOfEntry = gatewayPointOfEntry;
/*Declare global*/