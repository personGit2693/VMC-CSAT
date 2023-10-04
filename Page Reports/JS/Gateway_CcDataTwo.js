/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Reports.js";
import {requestCcDataTwo} from "./Request_CcDataTwo.js";
/*Import*/


/*Gateway*/
const gatewayCcDataTwo = () =>{
	requestCcDataTwo(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value);
}
/*Gateway*/


/*Declare global*/
window.gatewayCcDataTwo = gatewayCcDataTwo;
/*Declare global*/