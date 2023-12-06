/*Import*/
import {dataTwoTableWrap} from "../../Global JS/JSCollection_Module_Reports.js";
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