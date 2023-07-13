/*Import*/
import {requestEncodeRating} from "./Request_EncodeRating.js";
/*Import*/


/*Gateway*/
const gatewayEncodeRating = (submitScoreBtn) =>{
	requestEncodeRating(submitScoreBtn);
}
/*Gateway*/


/*Declare global*/
window.gatewayEncodeRating = gatewayEncodeRating;
/*Declare global*/