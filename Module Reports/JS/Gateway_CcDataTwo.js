/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Module_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Reports.js";
import {requestCcDataTwo} from "./Request_CcDataTwo.js";
/*Import*/


/*Gateway*/
async function gatewayCcDataTwo(){

	const gatewayPromise = new Promise(function(resolve){

		requestCcDataTwo(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayCcDataTwo = gatewayCcDataTwo;
/*Declare global*/