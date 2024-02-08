/*Import*/
import {dataOneTableWrap} from "./Elements_Page_CSATReports.js";
import DataOneTable from "./Component_DataOneTable.js";
/*Import*/


/*Render*/
function viewDataOneTable(){
	
	dataOneTableWrap.innerHTML = DataOneTable();
}
/*Render*/


/*Export*/
export default viewDataOneTable;
/*Export*/