/*Import*/
import {requestCitizenCharterTwoScores} from "./Request_CitizenCharterTwoScores.js";
/*Import*/


/*Gateway*/
const gatewayCitizenCharterTwoScores = () =>{
	requestCitizenCharterTwoScores();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayCitizenCharterTwoScores = gatewayCitizenCharterTwoScores;
/*Declare global*/