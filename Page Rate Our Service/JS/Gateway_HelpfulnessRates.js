/*Import*/
import {requestHelpfulnessRates} from "./Request_HelpfulnessRates.js";
/*Import*/


/*Gateway*/
const gatewayHelpfulnessRates = () =>{
	requestHelpfulnessRates();
}
/*Gateway*/


/*Declare global*/
window.gatewayHelpfulnessRates = gatewayHelpfulnessRates;
/*Declare global*/