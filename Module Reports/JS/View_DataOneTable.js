/*Import*/
import {dataOneTableWrap} from "../../Global JS/JSCollection_Module_Reports.js";
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