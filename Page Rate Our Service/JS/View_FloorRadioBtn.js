/*Import*/
import {floorRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import FloorRadioBtn from "./Component_FloorRadioBtn.js";
/*Import*/


/*Render*/
function renderFloorRadioBtn(){
	floorRadioBtnsWrap.innerHTML = FloorRadioBtn();
}
/*Render*/


/*Export*/
export default renderFloorRadioBtn;
/*Export*/