/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Dashboard.js";
import {requestOverallStronglyDisagree} from "./Request_OverallStronglyDisagree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallStronglyDisagree(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestOverallStronglyDisagree(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayOverallStronglyDisagree = gatewayOverallStronglyDisagree;
/*Declare global*/