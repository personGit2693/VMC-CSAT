/*Import*/
import {csmDataTableWrap} from "./Elements_Page_CSATReports.js";
import CsmDataTable from "./Component_CsmDataTable.js";
/*Import*/


/*Render*/
function viewCsmDataTable(){
	
	csmDataTableWrap.innerHTML = CsmDataTable();
}
/*Render*/


/*Export*/
export default viewCsmDataTable;
/*Export*/