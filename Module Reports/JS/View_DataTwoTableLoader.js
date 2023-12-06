/*Import*/
import {dataTwoTableWrap} from "../../Global JS/JSCollection_Module_Reports.js";
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