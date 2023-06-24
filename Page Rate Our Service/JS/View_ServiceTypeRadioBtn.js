/*Import*/
import {serviceTypeRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import ServiceTypeRadioBtn from "./Component_ServiceTypeRadioBtn.js";
/*Import*/


/*Render*/
function renderServiceTypeRadioBtn(){
	serviceTypeRadioBtnsWrap.innerHTML = ServiceTypeRadioBtn();
}
/*Render*/


/*Export*/
export default renderServiceTypeRadioBtn;
/*Export*/