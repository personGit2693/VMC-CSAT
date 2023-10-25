/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Reports.js";
//import renderDataOneTable from "./View_DataOneTable.js";
import {requestDataOne} from "./Request_DataOne.js";
/*Import*/


/*Gateway*/
async function gatewayDataOne(){

	const gatewayPromise = new Promise(function(resolve){

		requestDataOne(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayDataOne = gatewayDataOne;
/*Declare global*/