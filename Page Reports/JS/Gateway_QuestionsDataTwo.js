/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Reports.js";
import {requestQuestionsDataTwo} from "./Request_QuestionsDataTwo.js";
/*Import*/


/*Gateway*/
const gatewayQuestionsDataTwo = () =>{
	requestQuestionsDataTwo(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Gateway*/


/*Declare global*/
window.gatewayQuestionsDataTwo = gatewayQuestionsDataTwo;
/*Declare global*/