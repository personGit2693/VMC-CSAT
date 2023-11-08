/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Dashboard.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Dashboard.js";
import {requestOverallStronglyAgree} from "./Request_OverallStronglyAgree.js";
/*Import*/


/*Gateway*/
async function gatewayOverallStronglyAgree(){
	
	const gatewayPromise = new Promise(function(resolve){
		
		requestOverallStronglyAgree(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayOverallStronglyAgree = gatewayOverallStronglyAgree;
/*Declare global*/