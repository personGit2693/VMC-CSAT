/*Import*/
import {requestQuestionsScores} from "./Request_QuestionsTable.js";
/*Import*/


/*Gateway*/
const gatewayQuestionsTable = () =>{
	requestQuestionsScores();
	removeSpinningLoad();
}
/*Gateway*/


/*Declare global*/
window.gatewayQuestionsTable = gatewayQuestionsTable;
/*Declare global*/