/*Import*/
import {dataOneTableWrap} from "../../Global JS/JSCollection_Module_Reports.js";
import DataOneTable from "./Component_DataOneTable.js";
/*Import*/


/*Render*/
function renderDataOneTable(){	
	dataOneTableWrap.innerHTML = DataOneTable();
}
/*Render*/


/*Export*/
export default renderDataOneTable;
/*Export*/