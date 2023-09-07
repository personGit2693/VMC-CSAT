/*Import*/
import {requestCountPassScore} from "./Request_CountPassScore.js";
/*Import*/


/*Gateway*/
const gatewayCountPassScore = () =>{
	requestCountPassScore();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayCountPassScore = gatewayCountPassScore;
/*Declare global*/