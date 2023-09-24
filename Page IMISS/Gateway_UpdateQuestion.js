/*Import*/
import {newQuestion, questionId} from "../Global JS/JSCollection_Page_IMISS.js";
import {requestUpdateQuestion} from "./Request_UpdateQuestion.js";
/*Import*/


/*Gateway*/
const gatewayUpdateQuestion = () =>{
	requestUpdateQuestion(newQuestion, questionId);
}
/*Gateway*/


/*Declare global*/
window.gatewayUpdateQuestion = gatewayUpdateQuestion;
/*Declare global*/