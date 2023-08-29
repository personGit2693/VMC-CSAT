/*Import*/
import {dataOneTableWrap} from "./JSCollection_Page_DataOne.js";
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