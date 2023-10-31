/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Dashboard.js";
import {requestOverallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Gateway*/
async function gatewayOverallEngagement(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOverallEngagement(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayOverallEngagement = gatewayOverallEngagement;
/*Declare global*/