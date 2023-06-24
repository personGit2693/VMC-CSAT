/*Import*/
import {dropdownReligion} from "./JsCollection_Page_RateService.js";
import {requestReligions} from "./Request_Religions.js";
/*Import*/

const gatewayReligions = () =>{
	requestReligions();
	createCusDropOptWoRogrid(dropdownReligion);	
}

window.gatewayReligions = gatewayReligions;