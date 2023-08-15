/*Import*/
import {requestCitizenCharterOneScores} from "./Request_CitizenCharterOneScores.js";
/*Import*/


/*Gateway*/
const gatewayCitizenCharterOneScores = () =>{
	requestCitizenCharterOneScores();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayCitizenCharterOneScores = gatewayCitizenCharterOneScores;
/*Declare global*/