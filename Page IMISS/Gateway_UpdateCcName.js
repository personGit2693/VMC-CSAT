/*Import*/
import {newCitizenCharterName, citizenCharterId} from "../Global JS/JSCollection_Page_IMISS.js";
import {requestUpdateCcName} from "./Request_UpdateCcName.js";
/*Import*/


/*Gateway*/
const gatewayUpdateCcName = () =>{
	requestUpdateCcName(newCitizenCharterName, citizenCharterId);
}
/*Gateway*/


/*Declare global*/
window.gatewayUpdateCcName = gatewayUpdateCcName;
/*Declare global*/