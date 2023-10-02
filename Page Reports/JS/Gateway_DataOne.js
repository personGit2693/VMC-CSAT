/*Import*/
import {selectedOffice_Obj} from "../../Global JS/Values_Page_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "../../Global JS/JSCollection_Page_Reports.js";
import renderDataOneTable from "./View_DataOneTable.js";
import {requestDataOne} from "./Request_DataOne.js";
/*Import*/


/*Gateway*/
const functions_Array = [renderDataOneTable];

const gatewayDataOne = () =>{
	requestDataOne(selectedOffice_Obj.office_id, dateRangeOneCalLiteFromVal.value, dateRangeOneCalLiteToVal.value, functions_Array);
}
/*Gateway*/


/*Declare global*/
window.gatewayDataOne = gatewayDataOne;
/*Declare global*/