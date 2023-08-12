/*Import*/
import {requestOverallEngagement} from "./Request_OverallEngagement.js";
/*Import*/


/*Gateway*/
const gatewayOverallEngagement = () =>{
	requestOverallEngagement();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallEngagement = gatewayOverallEngagement;
/*Declare global*/