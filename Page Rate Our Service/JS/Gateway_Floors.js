/*Import*/
import {floorRadioBtnsWrap, officeRadioBtnsWrap} from "./JsCollection_Page_RateService.js";
import {requestFloors} from "./Request_Floors.js";
/*Import*/


/*Gateway*/
const gatewayFloors = () =>{
	requestFloors();
}
/*Gateway*/


/*Declare global*/
window.gatewayFloors = gatewayFloors;
/*Declare global*/