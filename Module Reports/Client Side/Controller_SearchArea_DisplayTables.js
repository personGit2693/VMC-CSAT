/*Import*/
import {external_clientTypeId, selectedOffice_Obj} from "./Values_Reports.js";
import {dateRangeOneCalLiteFromVal, dateRangeOneCalLiteToVal} from "./Elements_Page_CSATReports.js";
import controller_Document_GetDataOne from "./Controller_Document_GetDataOne.js";
import controller_Document_GetDataTwo from "./Controller_Document_GetDataTwo.js";
import controller_Document_GetCsmData from "./Controller_Document_GetCsmData.js";
import controller_Document_GetCommentsTable from "./Controller_Document_GetCommentsTable.js";
/*Import*/


/*Controller*/
function controller_SearchArea_DisplayTables(){	

	controller_Document_GetDataOne();
	controller_Document_GetDataTwo();
	controller_Document_GetCsmData();
	controller_Document_GetCommentsTable();
}
/*Controller*/


/*Declare Global*/
window.controller_SearchArea_DisplayTables = controller_SearchArea_DisplayTables;
/*Declare Global*/


/*Export*/
export default controller_SearchArea_DisplayTables;
/*Export*/