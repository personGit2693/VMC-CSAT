/*Import*/
import {officeServiceCheckboxesWrap} from "./JsCollection_Page_RateService.js";
import OfficeServiceCheckbox from "./Component_OfficeServiceCheckbox.js";
/*Import*/


/*Render*/
function renderOfficeServiceCheckbox(){
	officeServiceCheckboxesWrap.innerHTML = OfficeServiceCheckbox();
}
/*Render*/


/*Export*/
export default renderOfficeServiceCheckbox;
/*Export*/