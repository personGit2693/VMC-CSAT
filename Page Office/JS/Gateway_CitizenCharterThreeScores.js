/*Import*/
import {requestCitizenCharterThreeScores} from "./Request_CitizenCharterThreeScores.js";
/*Import*/


/*Gateway*/
const gatewayCitizenCharterThreeScores = () =>{
	requestCitizenCharterThreeScores();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayCitizenCharterThreeScores = gatewayCitizenCharterThreeScores;
/*Declare global*/