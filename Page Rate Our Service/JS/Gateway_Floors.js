/*Import*/
import {floorRadioBtnsWrap, officeRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import {requestFloors} from "./Request_Floors.js";
/*Import*/


/*Prep export variables*/
var buildingId = null;
/*Prep export variables*/


/*Gateway*/
const gatewayFloors = (selectedBuilding_Id) =>{
	buildingId = selectedBuilding_Id;

	floorRadioBtnsWrap.innerHTML = "Loading...";
	officeRadioBtnsWrap.innerHTML = "Select building and floor.";

	requestFloors();
}
/*Gateway*/


/*Declare global*/
window.gatewayFloors = gatewayFloors;
/*Declare global*/


/*Export*/
export {buildingId};
/*Export*/