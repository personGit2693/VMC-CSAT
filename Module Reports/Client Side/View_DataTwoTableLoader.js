/*Import*/
import {dataTwoTableWrap} from "./Elements_Page_CSATReports.js";
import DataTwoTableLoader from "./Component_DataTwoTableLoader.js";
/*Import*/


/*Render*/
function viewDataTwoTableLoader(){
	
	dataTwoTableWrap.innerHTML = DataTwoTableLoader();
}
/*Render*/


/*Export*/
export default viewDataTwoTableLoader;
/*Export*/