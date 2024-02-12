/*Import*/
import {dataTwoTableWrap} from "./Elements_Page_CSATReports.js";
import DataTwoTable from "./Component_DataTwoTable.js";
/*Import*/


/*Render*/
function viewDataTwoTable(){
	
	dataTwoTableWrap.innerHTML = DataTwoTable();
}
/*Render*/


/*Export*/
export default viewDataTwoTable;
/*Export*/