/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Reports.js";
import {requestQuestionsDataTwo} from "./Request_QuestionsDataTwo.js";
/*Import*/


/*Gateway*/
async function gatewayQuestionsDataTwo(){
	
	const gatewayPromise = new Promise(function(resolve){

		requestQuestionsDataTwo(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value)
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
window.gatewayQuestionsDataTwo = gatewayQuestionsDataTwo;
/*Declare global*/