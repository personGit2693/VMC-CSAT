/*Import*/
import {searchPointOfEntry} from "../../Global JS/JSCollection_Module_Office.js";
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
async function gatewayPointOfEntry(){

	const gatewayPromise = new Promise(function(resolve){
		
		requestPointOfEntry(searchPointOfEntry)
		.then(requestPromise => {
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