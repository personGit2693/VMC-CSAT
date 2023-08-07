/*Import*/
import {buildingRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import BuildingRadioBtn from "./Component_BuildingRadioBtn.js";
/*Import*/


/*Render*/
function renderBuildingRadioBtn(){
	buildingRadioBtnsWrap.innerHTML = BuildingRadioBtn();
}
/*Render*/


/*Export*/
export default renderBuildingRadioBtn;
/*Export*/