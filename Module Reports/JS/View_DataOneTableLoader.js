/*Import*/
import {dataOneTableWrap} from "../../Global JS/JSCollection_Module_Reports.js";
import DataOneTableLoader from "./Component_DataOneTableLoader.js";
/*Import*/


/*Render*/
function viewDataOneTableLoader(){

	dataOneTableWrap.innerHTML = DataOneTableLoader();
}
/*Render*/


/*Export*/
export default viewDataOneTableLoader;
/*Export*/