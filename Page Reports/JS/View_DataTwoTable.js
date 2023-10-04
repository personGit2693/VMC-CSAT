/*Import*/
import {dataTwoTableWrap} from "../../Global JS/JSCollection_Page_Reports.js";
import DataTwoTable from "./Component_DataTwoTable.js";
/*Import*/


/*Render*/
function renderDataTwoTable(){
	dataTwoTableWrap.innerHTML = DataTwoTable();
}
/*Render*/


/*Export*/
export default renderDataTwoTable;
/*Export*/