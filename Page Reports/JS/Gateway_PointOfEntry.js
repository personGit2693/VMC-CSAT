/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Page_Reports.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
/*const functions_Array = [outputPointOfEntryOption];*/

async function gatewayPointOfEntry(){

	const gatewayPromise = new Promise(function(resolve){		

		requestPointOfEntry(searchPointOfEntry.value)
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