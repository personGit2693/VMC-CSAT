/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Module_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Office.js";
import {requestCountPassScore} from "./Request_CountPassScore.js";
/*Import*/


/*Gateway*/
async function gatewayCountPassScore(){

	const gatewayPromise = new Promise(function(resolve){
		
		requestCountPassScore(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayCountPassScore = gatewayCountPassScore;
/*Declare global*/