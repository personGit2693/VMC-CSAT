/*Import*/
import {availedOfficeServiceWrap} from "../../Global JS/JSCollection_Module_Office.js";
import AvailedOfficeServiceLoader from "./Component_AvailedOfficeServiceLoader.js";
/*Import*/


/*Render*/
function viewAvailedOfficeServiceLoader(){

	availedOfficeServiceWrap.innerHTML = AvailedOfficeServiceLoader();
}
/*Render*/


/*Export*/
export default viewAvailedOfficeServiceLoader;
/*Export*/