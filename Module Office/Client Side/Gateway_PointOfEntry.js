/*Import*/
import {requestPointOfEntry} from "./Request_PointOfEntry.js";
/*Import*/


/*Gateway*/
async function gatewayPointOfEntry(searchPointOfEntry, startIn, maxDisplayRow){
	
	const gatewayPromise = new Promise(function(resolve){

		requestPointOfEntry(searchPointOfEntry, startIn, maxDisplayRow)
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