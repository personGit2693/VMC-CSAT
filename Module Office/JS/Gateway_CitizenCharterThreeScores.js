/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Module_Office.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Module_Office.js";
import {requestCitizenCharterThreeScores} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Gateway*/
async function gatewayCitizenCharterThreeScores(){

	const gatewayPromise = new Promise(function(resolve){

		requestCitizenCharterThreeScores(selectedOffice_Obj.office_id, clientTypeInternal, clientTypeExternal, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayCitizenCharterThreeScores = gatewayCitizenCharterThreeScores;
/*Declare global*/