/*Import*/
import {csmDataTableWrap} from "./Elements_Page_CSATReports.js";
import CsmDataTableLoader from "./Component_CsmDataTableLoader.js";
/*Import*/


/*Render*/
function viewCsmDataTableLoader(){
	
	csmDataTableWrap.innerHTML = CsmDataTableLoader();
}
/*Render*/


/*Export*/
export default viewCsmDataTableLoader;
/*Export*/