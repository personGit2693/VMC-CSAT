/*Import*/
import {requestAvailedOfficeService} from "./Request_AvailedOfficeService.js";
/*Import*/


/*Gateway*/
const gatewayAvailedOfficeService = () =>{
	requestAvailedOfficeService(drawBarChart);
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayAvailedOfficeService = gatewayAvailedOfficeService;
/*Declare global*/