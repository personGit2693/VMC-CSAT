/*Import*/
import {selectedOffice_Obj, clientTypeInternal, clientTypeExternal} from "../../Global JS/Values_Page_Reports.js";
import {dataOneFromDate, dataOneToDate} from "../../Global JS/JSCollection_Page_Reports.js";
import renderDataOneTable from "./View_DataOneTable.js";
import {requestDataOne} from "./Request_DataOne.js";
/*Import*/


/*Gateway*/
const gatewayDataOne = () =>{
	requestDataOne(selectedOffice_Obj, clientTypeInternal, clientTypeExternal, dataOneFromDate, dataOneToDate, renderDataOneTable);
}
/*Gateway*/


/*Declare global*/
window.gatewayDataOne = gatewayDataOne;
/*Declare global*/