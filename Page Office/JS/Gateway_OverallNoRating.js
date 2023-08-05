/*Import*/
import {requestOverallNoRating} from "./Request_OverallNoRating.js";
/*Import*/


/*Gateway*/
const gatewayOverallNoRating = () =>{
	requestOverallNoRating();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayOverallNoRating = gatewayOverallNoRating;
/*Declare global*/