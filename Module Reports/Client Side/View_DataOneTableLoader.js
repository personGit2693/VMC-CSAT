/*Import*/
import {dataOneTableWrap} from "./Elements_Page_CSATReports.js";
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