/*Import*/
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
async function gatewayPointOfEntry(searchPointOfEntry, pointOfEntryOptStartIndex, pointOfEntryOptDisplay){

	const gatewayPromise = new Promise(function(resolve){
		
		requestPointOfEntry(searchPointOfEntry, pointOfEntryOptStartIndex, pointOfEntryOptDisplay)
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


/*Export*/
export default gatewayPointOfEntry;
/*Export*/